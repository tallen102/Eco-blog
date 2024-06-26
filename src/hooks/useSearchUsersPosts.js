import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUsersPosts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState([]);
	const showToast = useShowToast();

	const getPostDetails = async (category) => {
		setIsLoading(true);
		setPosts([]);
		try {
			const q = query(collection(firestore, "posts"), where("category", "==", category));
			const querySnapshot = await getDocs(q);

			const postsData = [];
			querySnapshot.forEach((doc) => {
				postsData.push({ ...doc.data(), id: doc.id });
			});

			setPosts(postsData);
			if (postsData.length === 0) {
				showToast("Error", "Posts not found", "error");
			}
		} catch (error) {
			showToast("Error", error.message, "error");
			setPosts([]);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, getPostDetails, posts, setPosts };
};


export default useSearchUsersPosts;
