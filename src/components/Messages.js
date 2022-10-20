import React, { useEffect, useRef } from "react";
import { Avatar, AvatarBadge, Box, Flex, Text } from "@chakra-ui/react";

const Messages = ({ messages, senderPicture, receiverPicture }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <Flex w="100%" h="100%" overflowY="scroll" flexDirection="column" p="3">
      {messages &&
        messages.map((item, index) => {
          if (item.side === "right") {
            return (
              <Flex key={index} w="100%" justify="flex-end">
                <Flex d="flex" direction="column">
                  <Flex
                    bg="#1A233C"
                    color="white"
                    minW="100px"
                    maxW="350px"
                    borderRadius="10px"
                    my="1"
                    p="3"
                  >
                    <Box>
                      <Text>{item.text}</Text>
                    </Box>
                  </Flex>
                  <Text textAlign="right" fontSize="xs">
                    {item.timestamp}
                  </Text>
                </Flex>
                <Avatar
                  name="Computer"
                  src={
                    senderPicture ||
                    "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                  }
                  bg="blue.300"
                  ml="10px"
                >
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </Flex>
            );
          } else {
            return (
              <Flex key={index} w="100%">
                <Avatar
                  name="Computer"
                  src={receiverPicture}
                  bg="blue.300"
                  mr="10px"
                >
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
                <Flex d="flex" direction="column">
                  <Flex
                    bg="white"
                    color="black"
                    minW="100px"
                    maxW="350px"
                    my="1"
                    p="3"
                    borderRadius="10px"
                  >
                    <Text>{item.text}</Text>
                  </Flex>
                  <Text textAlign="left" fontSize="xs">
                    {item.timestamp}
                  </Text>
                </Flex>
              </Flex>
            );
          }
        })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
