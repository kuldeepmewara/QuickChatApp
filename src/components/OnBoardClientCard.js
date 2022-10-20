import React from "react";
import { Stack, Center, Box, Text, Button } from "@chakra-ui/react";
import { SettingsIcon, LinkIcon } from "@chakra-ui/icons";

function OnBoardClientCard() {
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
        <Text fontSize="2xl">
          <strong>OnBoard Client</strong>
        </Text>
        <Text fontSize="1xl" textAlign="center">
          Share the link with prospects and discuss all stuff
        </Text>

        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              rightIcon={<LinkIcon />}
              colorScheme="blue"
              bg="#0F4CFF"
              variant="solid"
            >
              Copy Link
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
}

export default OnBoardClientCard;
