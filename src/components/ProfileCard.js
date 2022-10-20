import React from "react";
import {
  Stack,
  Image,
  Center,
  Switch,
  Box,
  Text,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  Menu,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

function ProfileCard({ profile }) {
  return (
    <Center>
      <Stack
        direction="column"
        align="center"
        justifyContent="center"
        p="20px"
        bg="#F3F6FB"
        borderRadius="30px"
        w="100%"
        h="100%"
        shadow="1px"
      >
        <Image
          boxSize="100px"
          objectFit="cover"
          src={profile.picture}
          alt={profile.name}
          borderRadius="full"
        />
        <div>
          <strong>{profile.name} </strong>
          <Menu>
            <MenuButton>
              <SettingsIcon />
            </MenuButton>
            <Portal>
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Log out</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </div>

        <div>{profile.about}</div>

        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Switch id="isChecked" defaultChecked />
            <Text>{profile.status}</Text>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
}

export default ProfileCard;
