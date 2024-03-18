import { configureStore } from '@reduxjs/toolkit'
import { randomMovieReducer} from './randomMovie-slice'
import { movieListReducer } from './MovieList-slice'

export const store = configureStore({
  reducer: {
    randomMovie: randomMovieReducer,
    movieList: movieListReducer
  },
})
