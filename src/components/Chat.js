import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatTypingBlock from "../components/ChatTypingBlock";
import Messages from "../components/Messages";
import { addChat } from "../redux/Reducer/ChatSlice";

const Chat = ({ friendid, senderPicture }) => {
  const friendchats = useSelector((state) => state.friends);
  const dispatch = useDispatch();
  const [receiverPicture, setReceiverPicture] = useState(
    "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
  );

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [
      ...old,
      {
        side: "right",
        text: data,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        message_id: old.length + 1,
      },
    ]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [
        ...old,
        {
          side: "left",
          text: data,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          message_id: old.length + 1,
        },
      ]);
    }, 500);
  };
  useEffect(() => {
    const data = friendchats.filter((friendchat) => friendchat.id == friendid);
    setMessages(data[0].chatlog);
    setReceiverPicture(data[0].picture);
  }, [friendid]);

  useEffect(() => {
    dispatch(addChat({ id: friendid, data: messages }));
  }, [messages]);

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex
        w="100%"
        h="100%"
        flexDir="column"
        bg="#F3F6FB"
        borderRadius="20px"
        p="10px"
      >
        <Messages
          messages={messages}
          receiverPicture={receiverPicture}
          senderPicture={senderPicture}
        />

        <ChatTypingBlock
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};
export default Chat;
