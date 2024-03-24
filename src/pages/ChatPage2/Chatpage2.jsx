import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react'; // Assuming you're using Chakra UI
import Chat from "../../components/Chat/Chat";
import Chats from "../../components/Chat/Chats";
import Input from "../../components/Chat/Input";
import Message from "../../components/Chat/Message";
import Sidebarchat from "../../components/Chat/Sidebarchat";
import ChatHeader from '../../components/Chat/ChatHeader';

const Chatpage2 = () => {
  return (
    <Container maxW='container.lg' py={2}>
      <Flex>
        <ChatHeader/>
      </Flex>
      <Flex>
        <Box
          width={"25%"} // Adjust the width here (25% is an example)
          borderRight={"1px solid"}
          borderColor={"gray.200"} // Adjust border color as needed
          py={8}
          position={"sticky"}
          top={0}
          left={0}
          px={{ base: 2, md: 4 }}
          flex={0.7} // Take up remaining space
        >
          <Sidebarchat />
        </Box>
        <Box flex={1}>
          <Flex flexDirection="column">
            <Chat />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Chatpage2;


