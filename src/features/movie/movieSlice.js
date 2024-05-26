import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await fetch(import.meta.env.VITE_MOVIE_API)
    const data = await response.json();
    console.log(data)
    return data;
  })
  
  const MovieSlice = createSlice({
    name: 'movie',
    initialState:{
        movies:[],
        favorites:[],
        status:'idle'
    },
    reducers: {
      addToFav:(state,action)=>{
      state.favorites.push(action.payload);
      }
    },
    extraReducers(builder) {
      builder
        .addCase(fetchMovies.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(fetchMovies.fulfilled, (state, action) => {
          state.status = 'succeeded'
          // Add any fetched posts to the array
          state.movies = action.payload
        })
        .addCase(fetchMovies.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    }
  })

export const {addToFav} = MovieSlice.actions;
export const selectAllMovie = (state) => state.movie.movies;
export const selectAllFavorite = (state)=>state.movie.favorites;
export default MovieSlice.reducer;