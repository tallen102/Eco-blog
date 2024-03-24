import { Avatar, Box, Flex } from '@chakra-ui/react';
import React from 'react';

const Chats = () => {
  return (
    <>
      {/* User 1 */}
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
        
        pb={2}
        _hover={{ backgroundColor: "gray.100" }} 
      >
        <Flex alignItems={"center"} gap={5}>
          <Avatar src='/img4.png' alt='user profile pic' size={"md"} />
          <Flex fontSize={14} fontWeight={"bold"} gap='2'>
            User 1
            <Box color={"gray.500"}>1w</Box>
          </Flex>
        </Flex>
        <Box>
          <img
            src="/img4.png"
            alt="Product"
            style={{ width: '50px', height: '50px', objectFit: 'cover' }} // Adjust size as needed
          />
        </Box>
      </Flex>

      {/* User 2 */}
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
        pb={2}
        _hover={{ backgroundColor: "gray.100" }} // Apply hover effect
      >
        <Flex alignItems={"center"} gap={4}>
          <Avatar src='/img4.png' alt='user profile pic' size={"md"} />
          <Flex fontSize={14} fontWeight={"bold"} gap='2'>
            User 2
            <Box color={"gray.500"}>2w</Box>
          </Flex>
        </Flex>
        <Box>
          <img
            src="/img4.png"
            alt="Product"
            style={{ width: '50px', height: '50px', objectFit: 'cover' }} // Adjust size as needed
          />
        </Box>
      </Flex>

      {/* User 3 */}
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        my={2}
        pb={2}
        _hover={{ backgroundColor: "gray.100" }} // Apply hover effect
      >
        <Flex alignItems={"center"} gap={4}>
          <Avatar src='/img4.png' alt='user profile pic' size={"md"} />
          <Flex fontSize={14} fontWeight={"bold"} gap='2'>
            User 3
            <Box color={"gray.500"}>3w</Box>
          </Flex>
        </Flex>
        <Box>
          <img
            src="/img4.png"
            alt="Product"
            style={{ width: '50px', height: '50px', objectFit: 'cover' }} // Adjust size as needed
          />
        </Box>
      </Flex>
    </>
  );
};

export default Chats;



