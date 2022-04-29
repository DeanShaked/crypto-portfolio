import { createSlice } from "@reduxjs/toolkit";
import { getPositions } from "@/store/asyncThunk";

// Trade initial state
const initialState = {
  positionsList: {}, // All rates as a dict (Instrument symbolName as object key)
};

export const tradeSlice = createSlice({
  name: "trade",
  initialState,
  reducers: {},
  // Reducers for async actions
  extraReducers: {
    // User Data
    [getPositions.fulfilled]: (state, action) => {
      state.positionsList = action.payload;
    },
  },
});
