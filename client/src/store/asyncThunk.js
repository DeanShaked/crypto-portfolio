import { createAsyncThunk } from "@reduxjs/toolkit";

// User API
import { getUserData } from "../api/apiUser";

// Trade API
import { getPositions } from "../api/apiTrade";

export const fetchUserData = createAsyncThunk("user/getUserData", async () => {
  const userData = await getUserData();
  return userData;
});

export const fetchPositions = createAsyncThunk(
  "trade/getPostions",
  async () => {
    const positions = await getPositions();
    return positions;
  }
);
