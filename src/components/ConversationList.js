import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Box,
  Badge,
} from "@chakra-ui/react";
import Friend from "./Friend";

function ConversationList({ friendList }) {
  const ArhivedfriendList = friendList.filter((f) => f.status == "Arhived");
  const ActivefriendList = friendList.filter((f) => f.status == "Active");

  return (
    <Accordion allowToggle defaultIndex={[0]}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <strong>
                Active Conversations
                <Badge
                  fontSize="md"
                  w="25px"
                  h="25px"
                  colorScheme="gray"
                  borderRadius="50%"
                  ml="30px"
                  d="flex"
                  justifyContent="center"
                  textAlign="center"
                >
                  {ActivefriendList.length}
                </Badge>
              </strong>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} w="100%" h="400px">
          <Flex
            alignItems="left"
            overflowY="scroll"
            h="100%"
            direction="column"
          >
            {ActivefriendList.map((friend) => {
              return <Friend key={friend.id} friendData={friend} />;
            })}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <strong>
                Arhived Conversations
                <Badge
                  fontSize="md"
                  w="25px"
                  h="25px"
                  colorScheme="gray"
                  borderRadius="50%"
                  ml="20px"
                  d="flex"
                  justifyContent="center"
                  textAlign="center"
                >
                  {ArhivedfriendList.length}
                </Badge>
              </strong>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} w="100%" h="400px">
          <Flex
            alignItems="left"
            overflowY="scroll"
            h="100%"
            direction="column"
          >
            {ArhivedfriendList.map((friend) => {
              return <Friend key={friend.id} friendData={friend} />;
            })}
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ConversationList;
