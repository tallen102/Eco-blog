import React from 'react';
import { Flex } from '@chakra-ui/react'; // Importing Flex from Chakra UI
import Chats from '../Chat/Chats'; // Adjust the path according to your project structure

const Sidebarchat = () => {
  return (
    <Flex direction="column" flex={0.35} >
      <Chats />
    </Flex>
  );
};

export default Sidebarchat;
