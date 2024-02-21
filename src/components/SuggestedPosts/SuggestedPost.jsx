import { Box, Button, Flex, Text, Image, Link } from "@chakra-ui/react";
import useLikePost from "../../hooks/useLikePost"; // Import the appropriate hook for liking posts
import useAuthStore from "../../store/authStore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername"; // Import the hook to fetch user profile by username


const SuggestedPost = ({ post, setPost }) => { // Rename the component and props
    const { isLiked, isUpdating, handleLikePost } = useLikePost(post); // Use the appropriate hook for liking posts
    //  const authPost = usePostStore((state) => state.post);
    const authUser = useAuthStore((state) => state.user);
    const { userProfile } = useGetUserProfileByUsername(post.createdBy); // Fetch user profile by username


    const onLikePost = async () => { // Define the function for liking posts
        await handleLikePost();
        setPost({
            ...post,
            likes: isLiked ? post.likes.filter((like) => like.uid !== authUser.uid)
                : [...post.likes, authUser],
        });
    };

    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Link as={Link} to={`/profile/${post.uid}`}>
                    <Box fontSize={12} fontWeight={"bold"} mb={4} >
                        <Image src={post.imageURL} alt='post image' w="100px" />
                        <div>{post.title} </div>
                        <div>{post.description}</div>
                        <div>{post.category}</div>
                        <div>{post.condition}</div>
                        <div>{post.price}</div>
                        <div>Created by: {post.username} </div> {/* Display username */}

                    </Box>
                </Link>
                <Text fontSize={11} color={"gray.500"}>{post.likes.length} likes</Text> {/* Display post likes */}
            </Flex>
            {authUser.uid !== post.id && ( // Conditionally render the like button based on user and post
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
