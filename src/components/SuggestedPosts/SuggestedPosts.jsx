import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedPost from "./SuggestedPost"; // Import the SuggestedPost component
import useGetSuggestedPosts from "../../hooks/useGetSuggestedPosts"; // Import the appropriate hook for getting suggested posts

const SuggestedPosts = () => { // Rename the component
    const { isLoading, suggestedPosts } = useGetSuggestedPosts(); // Use the appropriate hook for getting suggested posts

    // Optional: render loading skeleton
    if (isLoading) return null;

    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />

            {suggestedPosts.length !== 0 && (
                <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                        Suggested Posts
                    </Text>
                    <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>
                        See All
                    </Text>
                </Flex>
            )}

            {suggestedPosts.map((post) => ( // Map through suggestedPosts and render SuggestedPost component for each post
                <SuggestedPost post={post} key={post.id} />
            ))}

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
                © 2023 Built By{" "}
                <Link href='https://www.youtube.com/@asaprogrammer_' target='_blank' color='blue.500' fontSize={14}>
                    As a Programmer
                </Link>
            </Box>
        </VStack>
    );
};

export default SuggestedPosts;
