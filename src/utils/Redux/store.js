import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";
import cacheSlice from "./cacheSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    chat: chatSlice,
  },
});

export default store;
