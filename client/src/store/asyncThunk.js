import { createAsyncThunk } from "@reduxjs/toolkit";

// User API
import { getUserData } from "@/api/apiUser";

// Trade API
import { getOpenPositions } from "@/api/apiTrade";

export const fetchUserData = createAsyncThunk("user/getUserData", async () => {
  const userData = await getUserData();
  return userData;
});

export const fetchPositions = createAsyncThunk(
  "trade/getPostions",
  async () => {
    const positions = await getOpenPositions();
    console.log("positions", positions);
    return positions;
  }
);
