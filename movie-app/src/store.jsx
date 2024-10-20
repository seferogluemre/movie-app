import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./redux/slice/MovieSlice";

export const store = configureStore({
  reducer: {
    movies: MovieSlice,
  },
});
