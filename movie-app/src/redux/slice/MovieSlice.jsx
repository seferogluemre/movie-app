import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_TOKEN = "3a86a054d7bc24caa5f33eb0da175bd0";

const Movies = {
  movies: [],
  loading: false,
};

export  const getAllMovies = createAsyncThunk("getMovies", async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}&language=en-US&page=1`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error var :" + error);
  }
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: Movies,
  reducers: {


  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
