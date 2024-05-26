import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await fetch(import.meta.env.VITE_MOVIE_API);
  const data = await response.json();
  // Sort movies by rating in descending order
  const sortedData = data.sort((a, b) => b.rating - a.rating);
  return sortedData;
});

const MovieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    favorites: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addToFav: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFav: (state, action) => {
      state.favorites = state.favorites.filter(movie => movie.id !== action.payload.id);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addToFav, removeFromFav } = MovieSlice.actions;
export const selectAllMovie = (state) => state.movie.movies;
export const selectAllFavorite = (state) => state.movie.favorites;
export default MovieSlice.reducer;
