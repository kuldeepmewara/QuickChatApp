import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

import ProfileCard from "../components/ProfileCard";
import TitleLogo from "../components/TitleLogo";
import Chat from "../components/Chat";
import ChatProfile from "../components/ChatProfile";
import OnBoardClientCard from "../components/OnBoardClientCard";
import ConversationList from "../components/ConversationList";
import Statistics from "../components/Statistics";
import { useSelector } from "react-redux";

const ChatScreen = () => {
  const data = useSelector((state) => state);
  return (
    <Grid
      w="100vw"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(4, 1fr)"
      gap="20px"
      p="10px"
      id="mainGrid"
      bg="white"
      borderRadius="20px"
    >
      {/* LEFT pane*/}
      <GridItem p="10px" d="flex" h="100vh" id="firstPane">
        <Grid
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(1, 1fr)"
          gap={1}
          rowSpan={1}
          colSpan={1}
          h="60vh"
        >
          <GridItem rowStart={1} d="flex" p="10px">
            <TitleLogo />
          </GridItem>
          <GridItem
            rowStart={2}
            justifyContent="center"
            alignItems="center"
            p="10px"
          >
            <ProfileCard profile={data.profile} />
          </GridItem>

          <GridItem rowStart={3} d="flex">
            <ConversationList friendList={data.profile.friends} />
          </GridItem>
        </Grid>
      </GridItem>

      {/* Center chat pane*/}
      <GridItem colStart={2} colEnd={4} p="10px" h="100vh" min-width="80vw">
        <Chat
          friendid={data.profile.openchatId}
          senderPicture={data.profile.picture}
        />
      </GridItem>

      {/* Right  pane*/}
      <GridItem p="10px" h="100vh" d="flex">
        <Grid
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(1, 1fr)"
          gap={1}
          rowSpan={1}
          colSpan={1}
          h="100vh"
          d="flex"
        >
          <GridItem rowStart={1} d="flex" p="10px">
            <ChatProfile friendid={data.profile.openchatId} />
          </GridItem>

          <GridItem rowStart={2} rowEnd={12}>
            <Statistics />
          </GridItem>
          <GridItem
            rowEnd={13}
            bg="white"
            justifyContent="center"
            alignItems="center"
            p="10px"
          >
            <OnBoardClientCard />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default ChatScreen;
