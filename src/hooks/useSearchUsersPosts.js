
import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
// Import necessary Firebase/Firestore functions

const useSearchUsersPosts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState(null);
    const showToast = useShowToast();

    const getPostDetails = async (title, category, condition) => {
        setIsLoading(true);
        setPost(null);
        try {
            let q = collection(firestore, "posts");

            if (category && condition) {
                q = query(q, where("category", "==", category), where("condition", "==", condition));
            } else if (category) {
                q = query(q, where("category", "==", category));
            } else if (condition) {
                q = query(q, where("condition", "==", condition));
            }

        } catch (error) {
            showToast("Error", error.message, "error");
            setPost(null);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, getPostDetails, post, setPost };
};
console.log(useSearchUsersPosts);
export default useSearchUsersPosts;
