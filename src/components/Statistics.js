import React from "react";
import {
  Grid,
  GridItem,
  Avatar,
  Flex,
  Center,
  Box,
  Text,
  Stat,
  StatNumber,
  StatHelpText,
  Icon,
} from "@chakra-ui/react";
import { BsClock, BsCalendarCheck, BsPeople } from "react-icons/bs";
import { TbMessage } from "react-icons/tb";

const StatCard = ({ icons, num, text, bg, textcolor, iconbg }) => {
  return (
    <Stat
      bg={bg}
      borderRadius="10px"
      m="2px"
      color="white"
      d="flex"
      direction="column"
      p="4px"
    >
      <Flex direction="row" justifyContent="center" alignItems="center">
        <Flex alignItems="center" d="flex" borderRadius="50%">
          <Avatar
            bg={iconbg}
            icon={
              <Icon as={icons} w="30px" fontSize="30px" color={textcolor} />
            }
          ></Avatar>
        </Flex>
        <Box ml="20px">
          <StatNumber color={textcolor}>
            <strong>{num}</strong>
          </StatNumber>
          <StatHelpText color="black">{text}</StatHelpText>
        </Box>
      </Flex>
    </Stat>
  );
};
const ActivityCard = () => {
  return (
    <Flex h="100%" direction="column" g="flex">
      <Flex
        d="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pl="20px"
        pr="20px"
      >
        <Text fontSize="2xl">
          <strong>Current week</strong>
        </Text>
        <Text fontSize="1xl">Activity</Text>
      </Flex>
      <Flex h="100%" justifyContent="center" p="0px">
        <Center>
          <Grid templateColumns="repeat(7,1fr)" h="100%" gap="10px">
            {[
              ["Mon", "80%"],
              ["Tue", "100%"],
              ["Wed", "80%"],
              ["Thu", "50%"],
              ["Fri", "40%"],
              ["Sat", "30%"],
              ["Sun", "20%"],
            ].map((day, i) => {
              var progress = day[1];
              var cur = new Date().getDay();

              return (
                <GridItem colStart={i + 1} h="100%" p="0px">
                  <Flex
                    h="100%"
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box h="100%" w="100%" p="10px">
                      <Box height={`calc(100% - ${progress})`}></Box>
                      <Box
                        bg={i + 1 == cur ? "blue" : "lightblue"}
                        h={`${progress}`}
                        borderRadius="5px"
                        p={i + 1 == cur ? "5px" : "10px"}
                      ></Box>
                    </Box>
                    <Box
                      bg="lightblue"
                      borderRadius="50%"
                      h="15px"
                      w="15px"
                    ></Box>
                    <Box>{day[0]}</Box>
                  </Flex>
                </GridItem>
              );
            })}
          </Grid>
        </Center>
      </Flex>
    </Flex>
  );
};
function Statistics() {
  return (
    <Flex
      w="100%"
      h="100%"
      bg="#F9FAFD"
      borderRadius="10px"
      direction="column"
      spacing="5px"
      ml="10px"
    >
      <Flex direction="row" p="10px">
        <StatCard
          icons={BsClock}
          num="13h"
          text="Time"
          bg="#D9E4FD"
          textcolor="blue"
          iconbg="#B2C7FF"
        />
        <StatCard
          icons={BsPeople}
          num="188"
          text="Attended"
          bg="#E3F6F3"
          textcolor="green"
          iconbg="#C8F0EA"
        />
      </Flex>

      <Flex direction="row" p="10px" justifyContent="space-between">
        <StatCard
          icons={BsCalendarCheck}
          num="119"
          text="Meetings"
          bg="#F7F3FF"
          textcolor="rgb(112,93,197)"
          iconbg="#D9D3FF"
        />
        <StatCard
          icons={TbMessage}
          num="41"
          text="Rejected"
          bg="#FFF1E8"
          textcolor="#FC5524"
          iconbg="#FEE1D3"
        />
      </Flex>
      <ActivityCard />
    </Flex>
  );
}

export default Statistics;
