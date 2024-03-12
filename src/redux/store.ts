import { configureStore } from '@reduxjs/toolkit'
import { randomMovieReducer} from './randomMovie-slice'

export const store = configureStore({
  reducer: {
    randomMovie: randomMovieReducer
  },
})
