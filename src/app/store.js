import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from '../features/movie/movieSlice'
export default configureStore({
  reducer: {
    movie:MovieReducer
  }
})