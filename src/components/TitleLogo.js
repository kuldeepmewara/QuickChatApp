import React from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";

function TitleLogo() {
  return (
    <Flex alignItems="center" d="flex">
      <Avatar
        name="Quick Chat"
        mr="10px"
        src="https://www.svgrepo.com/show/233266/bolt-thunder.svg"
        bg="lightblue"
        p="5px"
      ></Avatar>
      <Text fontSize="2xl" ml="18px">
        <strong>QuickChat</strong>
      </Text>
    </Flex>
  );
}

export default TitleLogo;
