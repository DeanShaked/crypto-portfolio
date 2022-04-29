import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "@/store/asyncThunk";

// User initial state
const initialState = {
  userData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // Reducers for async actions
  extraReducers: {
    // User Data
    [fetchUserData.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
  },
});
