import { createSlice } from "@reduxjs/toolkit";
import { fetchPositions } from "../asyncThunk";

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
    [fetchPositions.fulfilled]: (state, action) => {
      state.positionsList = action.payload;
    },
  },
});
// Export actions under reducers
export const {} = tradeSlice.actions;
export default tradeSlice.reducer;
