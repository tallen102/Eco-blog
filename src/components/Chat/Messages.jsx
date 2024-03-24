import React from 'react';
import { Flex } from '@chakra-ui/react';
import Message from './Message';

const Messages = () => {
  return (
    <Flex flexDirection="column" height={"100vh"}>
      <Message />
      <Message />
      <Message />
      <Message />
    </Flex>
  );
};

export default Messages;
