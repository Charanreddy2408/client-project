import { createSlice } from '@reduxjs/toolkit';
import imageIcon from "../Assests/images/Group 1272628427.png";
import diwaliImg from "../Assests/images/Group 1272628364.png";
import f1_Img from "../Assests/images/Group 1272628370.png";
import calender from "../Assests/images/Vector (4).png"
import t1 from "../Assests/images/Vector (3).png";
import t2 from "../Assests/images/Vector (5).png"

const dashBoardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dashBoardDetails: {
      Myfavourites: [
        { name: "Salary Slip", id: "1", icon: t1 },
        { name: "calender", id: "6", icon: calender },
        { name: "Salary Slip", id: "15", icon: t2},
        { name: "Salary Slip", id: "10", icon: t1},
        
      ],
      Finance: [
        { name: "Salary Slip", id: "1", icon: imageIcon },
        { name: "Asset Management", id: "2", icon: imageIcon },
        { name: "Salary Slip", id: "3", icon: imageIcon },
        { name: "Salary Slip", id: "4", icon: imageIcon },
      ],
      Human_Resource: [
        { name: "Salary Slip", id: "6", icon: imageIcon },
        { name: "Asset Management", id: "7", icon: imageIcon },
        { name: "Salary Slip", id: "8", icon: imageIcon },
        { name: "Salary Slip", id: "9", icon: imageIcon },

      ],
      Facilities_Managment: [
        { name: "Salary Slip", id: "11", icon: imageIcon },
        { name: "Asset Management", id: "12", icon: imageIcon },
        { name: "Salary Slip", id: "13", icon: imageIcon },
        { name: "Salary Slip", id: "14", icon: imageIcon },
      ],
    },
    Events: {
      image: diwaliImg,
      Title: "Diwali Celebration",
      Content: "Join us for the Diwali celebration with lights, music, and sweets.",
    },
    Notifications: {
      image: f1_Img,
      Title: "F1 Race Update",
      Content: "Catch the latest updates from the thrilling F1 race this weekend.",
      isopen:true,
    },
    VideoLibrary: {
      video: "path_to_video",
      Title: "Training Videos",
      Content: "Access a variety of training videos to enhance your skills.",
    },
  },
});

export const {} = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
