// Auto defualt redux dev tools,thunk middleware,development mistakes
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appSlice from "@/store/slicers/appSlice";
import tradeSlice from "@/store/slicers/tradeSlice";
import userSlice from "@/store/slicers/userSlice";

const combinedReducer = combineReducers({
  appSlice,
  tradeSlice,
  userSlice,
});

const rootReducer = (state, action) => {
  // After logout request fullfilled, clear app state
  if (action.type === "user/logout/fulfilled") {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
});
