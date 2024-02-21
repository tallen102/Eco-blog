// useGetSuggestedPosts.js
import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useGetSuggestedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [suggestedPosts, setSuggestedPosts] = useState([]);
    const authUser = useAuthStore((state) => state.user);
    const showToast = useShowToast();

    useEffect(() => {
        const getSuggestedPosts = async () => {
            setIsLoading(true);
            try {
                // Define your query based on the search criteria
                const usersRef = query(collection(firestore, "posts"));
                const q = query(
					usersRef,
					where("uid", "not-in", [authUser.uid, ...authUser.following]),
					orderBy("uid"),
					limit(3)
				);

                const querySnapshot = await getDocs(q);
                const posts = [];

                querySnapshot.forEach((doc) => {
                    posts.push({ ...doc.data(), id: doc.id });
                });

                setSuggestedPosts(posts);
            } catch (error) {
                showToast("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        };

        getSuggestedPosts();
    }, [authUser, showToast]);

    return { isLoading, suggestedPosts };
};

export default useGetSuggestedPosts;
