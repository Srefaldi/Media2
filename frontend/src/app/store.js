import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"; // Sesuaikan path jika berbeda

const store = configureStore({
  reducer: {
    auth: authReducer, // Tambahkan reducer yang digunakan
  },
});

export default store;
