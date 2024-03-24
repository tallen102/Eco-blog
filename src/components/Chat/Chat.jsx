import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react'; // Importing necessary components from Chakra UI
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <Flex className='chat' flexDirection="column" p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Text>Username</Text>
      </Flex>
      <Box>
        <Messages />
      </Box>
      <Box>
        <Input />
      </Box>
    </Flex>
  );
};

export default Chat;
