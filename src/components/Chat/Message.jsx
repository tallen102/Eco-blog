import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Message = ({ content, timestamp }) => {
  // Generate fake message content if none provided
  if (!content) {
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  }

  // Generate fake timestamp if none provided
  if (!timestamp) {
    const now = new Date();
    timestamp = now.toLocaleTimeString();
  }

  return (
    <Flex direction="column" align="flex-end" mb={2}>
      <Flex
        bg="blue.500"
        color="white"
        p={2}
        borderRadius="md"
        maxWidth="70%"
        alignSelf="flex-end"
      >
        <Text>{content}</Text>
      </Flex>
      <Text fontSize="sm" color="gray.500">
        {timestamp}
      </Text>
    </Flex>
  );
};

export default Message;

