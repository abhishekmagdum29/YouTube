import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    videoList: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addVideos: (state, action) => {
      state.videoList = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, addVideos } = appSlice.actions;

export default appSlice.reducer;
