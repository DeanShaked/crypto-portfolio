import { createSlice } from "@reduxjs/toolkit";

// User initial state
const initialState = {
  isLoginModalShown: false,
};

const closeOthers = (state) => {
  // Iterate over the state and close all open modal
  Object.entries(state).forEach(([key]) => {
    state[key] = false;
  });
};

/* eslint-disable no-unused-vars */

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      switch (action.payload) {
        case "login":
          if (!state.isLoginModalShown) closeOthers(state);
          state.isLoginModalShown = !state.isLoginModalShown;
          break;
        default:
          break;
      }
    },
  },
  // Reducers for async actions
  extraReducers: {},
});

/* eslint-enable no-unused-vars */

// Export actions under reducers
export const { toggleModal } = appSlice.actions;
export default appSlice.reducer;
