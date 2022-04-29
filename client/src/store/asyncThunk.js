import { createAsyncThunk } from "@reduxjs/toolkit";

// User API
import { getUserData } from "@/api/apiUser";

// Trade API
import { getPositions } from "@/api/apiTrade";

// Async request with redux to get user data
export const fetchUserData = createAsyncThunk("user/getUserData", async () => {
  const userData = await getUserData();
  return userData;
});

// Async request with redux to get user data
export const fetchPositions = createAsyncThunk(
  "trade/getPostions",
  async () => {
    const userData = await getPositions();
    return userData;
  }
);
