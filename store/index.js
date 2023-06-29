import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../slices/navbarSlice";
import globalReducer from "../slices/globalSlice";
import servicesReducer from "../slices/servicesSlice";

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    global: globalReducer,
    services: servicesReducer,
  },
});
