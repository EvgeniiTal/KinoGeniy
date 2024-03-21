import { configureStore } from '@reduxjs/toolkit'
import { randomMovieReducer} from './randomMovie-slice'
import { movieListReducer } from './MovieList-slice'
import { serialsListReducer } from './SerialsList-slice'
import { cartoonListReducer } from './CartoonList-slice'
import { animeListReducer } from './AnimeListSlice'

export const store = configureStore({
  reducer: {
    randomMovie: randomMovieReducer,
    movieList: movieListReducer,
    serialsList: serialsListReducer,
    cartoonList: cartoonListReducer,
    animeList: animeListReducer
  },
})
