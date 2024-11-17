import { createSlice } from "@reduxjs/toolkit";
import imageIcon from "../Assests/images/Group 1272628427.png";
import diwaliImg from "../Assests/images/Group 1272628364.png";
import f1_Img from "../Assests/images/Group 1272628370.png";
import calender from "../Assests/images/Vector (4).png";
import t1 from "../Assests/images/Vector (3).png";
import t2 from "../Assests/images/Vector (5).png";
import emojiIcon from "../Assests/images/Group 1272628347.png";
import analyticsIcon from "../Assests/images/Frame (1).png";
import technicalsupportIcon from "../Assests/images/Vector (2).png";
import redIcon from "../Assests/images/redicon.jpeg";
import greenIcon from "../Assests/images/greenicon.jpeg";
const dashBoardSlice = createSlice({
  name: "dashboard",
  initialState: {
    dashBoardDetails: {
      isRemovedState: false,
      searchValue: "",
      sideBarItems: [
        {
          name: "Home",
          id: "1",
          icon: emojiIcon,
          redirect: "/home/",
        },
        {
          name: "Mood Tracker",
          id: "2",
          icon: emojiIcon,
          redirect: "/home/mood-tracker",
        },
        {
          name: "Analytics",
          id: "3",
          icon: analyticsIcon,
          redirect: "/home/Analytics",
        },
        {
          name: "Feedback",
          id: "4",
          icon: emojiIcon,
          redirect: "/home/Feedback",
        },
        {
          name: "Technical Support",
          id: "5",
          icon: technicalsupportIcon,
          redirect: "/home/Techinal_Support",
        },
      ],
      Myfavourites: [
        { name: "Salary Slip", id: "1", icon: redIcon }, // From Facilities_Managment
        { name: "Asset Management", id: "2", icon: imageIcon }, // From Finance
        { name: "Employee Details", id: "6", icon: greenIcon }, // From Human_Resource
        { name: "Office Supplies", id: "14", icon: redIcon }, // From Facilities_Managment
      ],
      Finance: [
        { name: "Budget Report", id: "3", icon: imageIcon },
        { name: "Expense Tracking", id: "4", icon: imageIcon },
        { name: "Investment Details", id: "5", icon: imageIcon },
        { name: "Payroll", id: "6", icon: imageIcon },
        { name: "Tax Compliance", id: "7", icon: imageIcon },
      ],
      Human_Resource: [
        { name: "Employee Directory", id: "8", icon: greenIcon },
        { name: "Attendance Record", id: "9", icon: greenIcon },
        { name: "Leave Management", id: "10", icon: greenIcon },
        { name: "Recruitment Tracker", id: "11", icon: greenIcon },
        { name: "Training Schedule", id: "12", icon: greenIcon },
      ],
      Facilities_Managment: [
        { name: "Building Maintenance", id: "13", icon: redIcon },
        { name: "Office Supplies", id: "14", icon: redIcon },
        { name: "Emergency Contacts", id: "15", icon: redIcon },
        { name: "Seating Plan", id: "16", icon: redIcon },
        { name: "Vendor Management", id: "17", icon: redIcon },
      ],
    },
    Events: {
      image: [diwaliImg, f1_Img, diwaliImg],
      Title: "Diwali Celebration",
      Content:
        "Join us for the Diwali celebration with lights, music, and sweets.",
    },
    Notifications: {
      image: [f1_Img, diwaliImg, f1_Img],
      Title: "F1 Race Update",
      Content:
        "Catch the latest updates from the thrilling F1 race this weekend.",
      isopen: true,
    },
    VideoLibrary: {
      video: [
        { id: 1, src: "/v1.mp4", description: "Video 1" },
        { id: 2, src: "/v2.mp4", description: "Video 2" },
        { id: 3, src: "/v3.mp4", description: "Video 3" },
      ],
      Title: "Training Videos",
      Content: "Access a variety of training videos to enhance your skills.",
    },
  },
  reducers: {
    // Toggle the notificationsEnabled state
    toggleNotifications: (state, action) => {
      state.Notifications.isopen = action.payload;
    },
    toggleFavorite: (state, action) => {
      const { cardId, isFavorite } = action.payload;
      const favorites = state.dashBoardDetails.Myfavourites;

      if (isFavorite) {
        // Add to favorites if not already present
        let cardToAdd = null;

        // Search for the card in the different categories
        const categories = [
          state.dashBoardDetails.Finance,
          state.dashBoardDetails.Human_Resource,
          state.dashBoardDetails.Facilities_Managment,
        ];
        for (let category of categories) {
          cardToAdd = category.find((item) => item.id === cardId);
          if (cardToAdd) break; // Stop searching once we find the card
        }

        // If card is found and not already in favorites, add it
        if (cardToAdd && !favorites.find((item) => item.id === cardId)) {
          state.dashBoardDetails.Myfavourites.push(cardToAdd);
        }
      } else {
        // Remove from favorites
        state.dashBoardDetails.Myfavourites = favorites.filter(
          (item) => item.id !== cardId
        );
      }
    },
    updateMostUsedItems: (state, action) => {
      state.dashBoardDetails.Myfavourites = action.payload;
    },
    setIsRemovedState: (state, action) => {
      state.dashBoardDetails.isRemovedState = action.payload;
    },
    setSearchValue: (state, action) => {
      state.dashBoardDetails.searchValue = action.payload;
    },
  },
});

export const {
  toggleNotifications,
  toggleFavorite,
  updateMostUsedItems,
  setIsRemovedState,
  setSearchValue,
} = dashBoardSlice.actions;

export default dashBoardSlice.reducer;
