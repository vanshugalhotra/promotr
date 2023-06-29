import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPopup: false,
};

export const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    closePopup: (state) => {
      state.showPopup = false;
    },
    openPopup: (state) => {
      state.showPopup = true;
    },
  },
});

export const { openPopup, closePopup } = servicesSlice.actions;
export default servicesSlice.reducer;
