import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./personSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    person: personSlice,
  },
});
