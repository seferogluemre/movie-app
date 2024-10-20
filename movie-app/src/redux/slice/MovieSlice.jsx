import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_TOKEN = "3a86a054d7bc24caa5f33eb0da175bd0";

const movies = {
  movies: [],
  loading: false,
};

export const getAllMovies = createAsyncThunk("getMovies", async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}&language=en-US&page=1`
    );
    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.log("error var :" + error);
    throw error;
  }
});

export const movieSlice = createSlice({
  name: "movies",
  initialState: movies,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllMovies.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = movieSlice.actions;

export default movieSlice.reducer;
