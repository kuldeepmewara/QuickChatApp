import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Flex, Box, Text, Badge } from "@chakra-ui/react";
import { setOpenFriendId } from "../redux/Reducer/ChatSlice";

function Friend({ friendData, openChatid }) {
  const dispatch = useDispatch();
  const openchatid = useSelector((state) => state.profile.openchatId);
  const openChatHandler = () => {
    dispatch(setOpenFriendId(friendData.id));
  };
  return (
    <Flex
      alignItems="center"
      gap="2"
      bg={friendData.id == openchatid ? "#F3F6FB" : ""}
      borderRadius="10px"
      p="5px"
      pl="20px"
      m="5px"
      cursor="pointer"
      onClick={openChatHandler}
    >
      <Flex d="flex" direction="row" alignItems="center" w="100%">
        <Image
          boxSize="50px"
          objectFit="cover"
          src={friendData.picture}
          alt="Dan Abramov"
          borderRadius="full"
          mr="30px"
          ml="20px"
        />
        <Text>{friendData.name}</Text>
      </Flex>
      <Box>
        {friendData.lastUnseenChat.length > 0 && (
          <Badge
            fontSize="md"
            w="25px"
            h="25px"
            bg="red.500"
            borderRadius="50%"
            color="white"
            d="flex"
            textAlign="center"
          >
            {friendData.lastUnseenChat.length}
          </Badge>
        )}{" "}
      </Box>
    </Flex>
  );
}

export default Friend;
