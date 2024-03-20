import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestMovieList, requestMovie } from '../services/MovieList'

interface InitialState {
  data: null | object,
  movie: null | object,
  status: null | string,
  error: null | string,
  limit: number,
  pagesCounter: number
}

const initialState: InitialState = {
  data: null,
  movie: null,
  status: null,
  error: null,
  limit: 12,
  pagesCounter: 0
}

interface Opts {
  typeNumber: number,
  page?: number | string,
  sortField?: string,
  sortType?: number
}


export const fetchMovieList = createAsyncThunk(
  'movieList/fetchMovieListStatus',
  async (opts: Opts, thunkAPI: any) => {
    try {
      const { typeNumber, page = 1, sortField = 'name', sortType = 1 }: Opts = opts
      const { limit }: InitialState = thunkAPI.getState().movieList

      const data = await requestMovieList({ typeNumber, limit, page, sortField, sortType })
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const fetchMovie = createAsyncThunk(
  'movieList/fetchMovieStatus', async (id: string | undefined, thunkAPI: any) => {
    try {
      const data = await requestMovie(id)
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const movieListSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieList.pending, (state: any) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchMovieList.fulfilled, (state: any, action) => {
        state.status = 'resolved'
        state.data = action.payload
        state.pagesCounter = action.payload.pages
      })
      .addCase(fetchMovieList.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(fetchMovie.pending, (state: any) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchMovie.fulfilled, (state: any, action) => {
        state.status = 'resolved'
        state.movie = action.payload
      })
      .addCase(fetchMovie.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  }
})

export const movieListReducer = movieListSlice.reducer
