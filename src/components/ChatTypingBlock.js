import React from "react";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Icon,
  InputRightElement,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import { BiSmile, BiSend } from "react-icons/bi";

const ChatTypingBlock = ({
  inputMessage,
  setInputMessage,
  handleSendMessage,
}) => {
  return (
    <Flex w="100%" bg="white" p="10px" borderRadius="10px">
      <Button mr="10px" leftIcon={<AttachmentIcon />} bg="none"></Button>
      <InputGroup>
        <Input
          placeholder="Enter you message here"
          _focus={{
            border: "1px solid lightgray",
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <InputRightElement children={<Icon as={BiSmile} color="orange" />} />
      </InputGroup>
      <Button
        varient="solid"
        ml="10px"
        colorScheme="blue"
        bg="#0F4CFF"
        rightIcon={<Icon as={BiSend} />}
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Flex>
  );
};
export default ChatTypingBlock;
