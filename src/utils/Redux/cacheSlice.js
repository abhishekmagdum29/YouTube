import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addCacheResult: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addCacheResult } = cacheSlice.actions;

export default cacheSlice.reducer;
