import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showPopup: false,
  popupForm: true,
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
    setPopupForm: (state, action) => {
      state.popupForm = action.payload;
    },
  },
});

export const { openPopup, closePopup, setPopupForm } = servicesSlice.actions;
export default servicesSlice.reducer;
