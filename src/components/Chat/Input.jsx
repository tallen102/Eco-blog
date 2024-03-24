import React from 'react';
import { Flex, Input as ChakraInput, Button } from '@chakra-ui/react';

const Input = () => {
  return (
    <Flex>
      <ChakraInput flex="1" placeholder="Enter your message" />
      <Button colorScheme="blue" ml={2}>Send</Button>
    </Flex>
  );
};

export default Input;
