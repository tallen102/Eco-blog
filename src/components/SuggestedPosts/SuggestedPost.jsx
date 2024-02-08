import { Box, Button, Flex, Text } from "@chakra-ui/react";
import useLikePost from "../../hooks/useLikePost"; // Import the appropriate hook for liking posts
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedPost = ({ post, setPost }) => { // Rename the component and props
    const { isLiked, isUpdating, handleLikePost } = useLikePost(post.id); // Use the appropriate hook for liking posts
    const authUser = useAuthStore((state) => state.user);


    const onLikePost = async () => { // Define the function for liking posts
        await handleLikePost();
        setPost({
            ...post,
            likes: isLiked ? post.likes.filter((like) => like.uid !== authUser.uid) : [...post.likes, authUser],
        });
    };

    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Link to={`/posts/${post.id}`}> {/* Link to the post details page */}
                    <Box fontSize={12} fontWeight={"bold"}>
                        {post.title} {/* Display post title */}
                        {post.description} {/* Display post description */}
                        {post.category} {/* Display post category */}
                        {post.condition} {/* Display post condition */}
                    </Box>
                </Link>
                <Text fontSize={11} color={"gray.500"}>{post.likes.length} likes</Text> {/* Display post likes */}
            </Flex>
            {authUser.uid !== post.authorId && ( // Conditionally render the like button based on user and post
                <Button
                    fontSize={13}
                    bg={"transparent"}
                    p={0}
                    h={"max-content"}
                    fontWeight={"medium"}
                    color={"blue.400"}
                    cursor={"pointer"}
                    _hover={{ color: "white" }}
                    onClick={onLikePost}
                    isLoading={isUpdating}
                >
                    {isLiked ? "Unlike" : "Like"} {/* Update button text based on like status */}
                </Button>
            )}
        </Flex>
    );
};

export default SuggestedPost;
