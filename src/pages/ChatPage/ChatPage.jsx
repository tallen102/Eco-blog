import React, { useState } from 'react';
import { Box, Flex, VStack, Input, Button, Text, Avatar, Link, SkeletonCircle } from '@chakra-ui/react';
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { timeAgo } from "../../utils/timeAgo";

const ChatPage = () => {
  const { userProfile, isLoading: profileLoading } = useGetUserProfileById();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSend = () => {
    if (inputValue.trim() !== '') {
      const timestamp = timeAgo(new Date()); // Get the time ago string
      const newMessage = {
        content: inputValue,
        timestamp: timestamp
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };
  
  

  return (
    <Flex>
      {/* Left side */}
      <Box
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{ base: 2, md: 4 }}
        flex={1} // Take up remaining space
      >
        <Flex direction={"column"} align="stretch">
          <VStack spacing={4} align="stretch">
            {/* User Profile */}
{!profileLoading && userProfile ? (
  <Link to={`/${userProfile.username}`}>
    <Avatar src={userProfile.profilePicURL} size={"sm"} />
  </Link>
) : (
  <SkeletonCircle size="8" />
)}

          </VStack>
        </Flex>
      </Box>
      
      {/* Right side */}
      <Box
        height={"100vh"}
        py={8}
        px={{ base: 2, md: 4 }}
        flex={1} // Take up remaining space
        display="flex"
        flexDirection="column"
        justifyContent="space-between" // Align items with space between
      >
        {/* Chat messages */}
        <VStack spacing={2} align="stretch">
          {messages.map((message, index) => (
            <Box key={index} textAlign="right">
              <Flex direction="column" align="flex-end">
                <Text bg="blue.500" color="white" p={2} borderRadius="md" maxWidth="70%">
                  {message.content}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {message.timestamp}
                </Text>
              </Flex>
            </Box>
          ))}
        </VStack>

        {/* Input field and send button */}
        <Flex align="center">
          <Input
            flex={1}
            mr={2}
            placeholder="Type your message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleMessageSend();
            }}
          />
          <Button colorScheme="blue" onClick={handleMessageSend}>Send</Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ChatPage;

