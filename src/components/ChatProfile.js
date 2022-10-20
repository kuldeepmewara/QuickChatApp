import React from "react";
import { FiMail } from "react-icons/fi";

import { CgProfile } from "react-icons/cg";
import {
  Stack,
  AvatarGroup,
  Avatar,
  Flex,
  Center,
  Box,
  Button,
  Icon,
} from "@chakra-ui/react";
import { BsArchive } from "react-icons/bs";
import { useSelector } from "react-redux";

function ChatProfile({ friendid }) {
  var friendDetail = useSelector((state) => state.profile.friends);
  const fDetail = friendDetail.find((fdetails) => fdetails.id == friendid);
  return (
    <Center>
      <Stack
        direction="column"
        align="center"
        p="20px"
        bg="#F3F6FB"
        borderRadius="30px"
        w="100%"
        h="100%"
      >
        <AvatarGroup spacing="1rem">
          <Avatar
            name={fDetail.name}
            bg="rgb(178,201,255)"
            w="70px"
            h="70px"
          ></Avatar>
        </AvatarGroup>

        <Box d="flex" w="100%" pl="10px">
          <Flex alignItems="center" gap="2">
            <Icon as={FiMail} d="inline-block" />
            <div>{fDetail.email}</div>
          </Flex>
          <Flex alignItems="center" gap="2">
            <Icon as={CgProfile} d="inline-block" />
            <div>{fDetail.name}</div>
          </Flex>
        </Box>

        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              rightIcon={<Icon as={BsArchive} />}
              colorScheme="blue"
              variant="outline"
              bg="white"
            >
              {fDetail.status}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
}
export default ChatProfile;
