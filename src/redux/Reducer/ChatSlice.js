import { createSlice } from "@reduxjs/toolkit";
const chatData = {
  profile: {
    id: 1,
    name: "Bill Bradford",
    picture: "https://image.ibb.co/k0wVTm/profile_pic.jpg",
    about: "Lead UI/UX Designer",
    status: "Active",
    openchatId: 2,
    friends: [
      {
        id: 2,
        name: "Henry Boyed ",
        picture: "https://image.ibb.co/cA2oOb/alex_1.jpg",
        latest_timestamp: "10:00 AM",
        email: "Henry Boyed@gmail.com",
        status: "Active",
        lastUnseenChat: [],
      },
      {
        id: 3,
        name: "Martha Curtis",
        picture: "https://image.ibb.co/gSyTOb/bob_1.jpg",
        latest_timestamp: "12:30 AM",
        lastUnseenChat: [
          "I will look into it",
          "Exactly my point!",
          "Bye",
          "Take care",
        ],
        email: "Martha.Curtis@gmail.com",
        status: "Active",
      },
      {
        id: 4,
        name: "Phillipse Tucker",
        picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
        latest_timestamp: "4:12 PM",
        lastUnseenChat: [],
        email: "Phillips.tukker@gmail.com",
        status: "Active",
      },
      {
        id: 5,
        name: "Jerry Guzman",
        picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
        latest_timestamp: "7:53 PM",
        lastUnseenChat: [],
        email: "Jerry.guzman@gmail.com",
        status: "Active",
      },
      {
        id: 6,
        name: "Russell Williams",
        picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
        latest_timestamp: "1:09 PM",
        lastUnseenChat: [
          "Not quite the same.",
          "Exactly my point!",
          "Bye",
          "Take care",
        ],
        email: "Russell Williams@gmail.com",
        status: "Active",
      },
      {
        id: 10,
        name: "Kennith hudsman",
        picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
        latest_timestamp: "Wednesday",
        lastUnseenChat: [
          "Not quite the same.",
          "Exactly my point!",
          "Bye",
          "Take care",
        ],
        email: "kennithhudsman@gmail.com",
        status: "Active",
      },
      {
        id: 11,
        name: "Tara martina",
        picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
        latest_timestamp: "Monday",
        lastUnseenChat: [
          "Not today",
          "Not quite the same.",
          "Exactly my point!",
          "Bye",
          "Take care",
        ],
        email: "Taramartina@gmail.com",
        status: "Active",
      },
      {
        id: 12,
        name: "Gary bradson ",
        picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
        latest_timestamp: "Sunday",
        lastUnseenChat: ["Whatever works for you!"],
        email: "garybradcom@gmail.com",
        status: "Arhived",
      },
      {
        id: 13,
        name: "Zoey zaheen",
        picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
        latest_timestamp: "8/12/2017",
        lastUnseenChat: [],
        email: "ZoyaZaheen@gmail.com",
        status: "Arhived",
      },
      {
        id: 14,
        name: "Ash Ali",
        picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
        latest_timestamp: "6/12/2017",
        lastUnseenChat: [],
        email: "Ashali@gmail.com",
        status: "Arhived",
      },
      {
        id: 15,
        name: "Zen Zenmax",
        picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
        latest_timestamp: "19/11/2017",
        lastUnseenChat: [],
        email: "Zenzetmax@gmail.com",
        status: "Arhived",
      },
    ],
  },
  friends: [
    {
      id: 2,
      name: "Henry Boyed",
      picture: "https://image.ibb.co/cA2oOb/alex_1.jpg",
      chatlog: [
        {
          text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          timestamp: "10:05 AM",
          side: "left",
          message_id: 5,
        },
        {
          text: "hello There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
          timestamp: "10:00 AM",
          side: "right",
          message_id: 99,
        },
        {
          text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 4,
        },
        {
          text: "Or maybe not, let me check logistics and call you. Give me sometime",
          timestamp: "10:03 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "I believe they must have misplaced it elsewhere?!",
          timestamp: "10:02 AM",
          side: "left",
          message_id: 2,
        },
        {
          text: "Did you recieve the package I sent you the other day?",
          timestamp: "10:00 AM",
          side: "left",
          message_id: 1,
        },
      ],
    },
    {
      id: 3,
      name: "Martha Curtis",
      picture: "https://image.ibb.co/gSyTOb/bob_1.jpg",
      chatlog: [
        {
          text: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable",
          timestamp: "07:05 AM",
          side: "left",
          message_id: 4,
        },
        {
          text: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
          timestamp: "07:00 AM",
          side: "left",
          message_id: 3,
        },
        {
          text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
          timestamp: "06:58 AM",
          side: "left",
          message_id: 2,
        },
        {
          text: "Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
          timestamp: "06:55 AM",
          side: "left",
          message_id: 1,
        },
      ],
    },
    {
      id: 4,
      name: "Phillipse Tucker",
      picture: "https://image.ibb.co/jOzeUG/luke_1.jpg",
      chatlog: [],
    },
    {
      id: 5,
      name: "Bane",
      picture: "https://image.ibb.co/cBZPww/bane_1.jpg",
      chatlog: [],
    },
    {
      id: 6,
      name: "Darth Vader",
      picture: "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
      chatlog: [],
    },
    {
      id: 7,
      name: "Zach",
      picture: "https://image.ibb.co/b4kxGw/zach_1.jpg",
      chatlog: [],
    },
    {
      id: 8,
      name: "Katie",
      picture: "https://image.ibb.co/eLVWbw/katie_1.jpg",
      chatlog: [],
    },
    {
      id: 9,
      name: "Chloe",
      picture: "https://image.ibb.co/ncAa3b/chloe_1.jpg",
      chatlog: [],
    },
    {
      id: 10,
      name: "Kennith",
      picture: "https://image.ibb.co/fQKPww/kennith_1.jpg",
      chatlog: [],
    },
    {
      id: 11,
      name: "Tara",
      picture: "https://image.ibb.co/dM6hib/tara_1.jpg",
      chatlog: [],
    },
    {
      id: 12,
      name: "Gary",
      picture: "https://image.ibb.co/gsF8Ob/gary_1.jpg",
      chatlog: [],
    },
    {
      id: 13,
      name: "Zoey",
      picture: "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
      chatlog: [],
    },
    {
      id: 14,
      name: "Ash",
      picture: "https://image.ibb.co/iasYpG/ash_1.jpg",
      chatlog: [],
    },
    {
      id: 15,
      name: "Zen",
      picture: "https://image.ibb.co/eeqWbw/zen_1.jpg",
      chatlog: [],
    },
  ],
};

const chatSlice = createSlice({
  name: "chatData",
  initialState: chatData,
  reducers: {
    getfriendList(state, action) {
      return state.friends;
    },
    setOpenFriendId(state, action) {
      state.profile.openchatId = action.payload;
    },
    addChat(state, action) {
      const todo = state["friends"].find(
        (todo) => todo.id === action.payload.id
      );
      state["friends"] = state["friends"].filter(
        (f) => f.id != action.payload.id
      );
      state["friends"].push({ ...todo, chatlog: action.payload.data });
    },
  },
});

export const { getfriendList, setOpenFriendId, addChat } = chatSlice.actions;
export default chatSlice.reducer;
