
import { configureStore } from '@reduxjs/toolkit';

import dashBoardSlice from './dashBoardSlice'

const store = configureStore({
  reducer: {
    dashBoard: dashBoardSlice, 
  },
});

export default store;