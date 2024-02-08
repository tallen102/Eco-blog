import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";
import useSearchUsersPosts from "../../hooks/useSearchUsersPosts"; // Updated import
import { useRef } from "react";
import SuggestedPost from "../SuggestedPosts/SuggestedPost"; // Updated import

const PostSearch = () => { // Renamed component
    const { isOpen, onOpen, onClose } = useDisclosure();
    const searchRef = useRef(null);
    const { post, isLoading, getPostDetails, setPost } = useSearchUsersPosts(); // Updated hooks

    const handleSearchPost = (e) => {
        e.preventDefault();
        getPostDetails(searchRef.current.value); // Updated function call
    };

    return (
        <>
            <Tooltip
                hasArrow
                label={"Search"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Flex
                    alignItems={"center"}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    onClick={onOpen}
                >
                    <SearchLogo />
                    <Box display={{ base: "none", md: "block" }}>Search</Box>
                </Flex>
            </Tooltip>

            <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
                <ModalOverlay />
                <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
                    <ModalHeader>Search Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form onSubmit={handleSearchPost}>
                            <FormControl>
                                <FormLabel>Post Title</FormLabel>
                                <Input placeholder='Enter post title' ref={searchRef} />
                            </FormControl>

                            <Flex w={"full"} justifyContent={"flex-end"}>
                                <Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>
                                    Search
                                </Button>
                            </Flex>
                        </form>
                        {post && <SuggestedPost post={post} setPost={setPost} />} 
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
console.log(PostSearch);
export default PostSearch;
