import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestMovieList } from '../services/MovieList'

interface initialState {
  data: any
  status: any
  error: any,
  limit: number,
  pagesCounter: number
}

const initialState: initialState = {
  data: null,
  status: null,
  error: null,
  limit: 12,
  pagesCounter: 0
}

interface Opts {
  typeNumber: number
  page?: number | string
}


export const fetchMovieList = createAsyncThunk(
  'movieList/fetchMovieListStatus',
  async (opts: Opts, thunkAPI: any) => {
    try {
      console.log(thunkAPI)
      const { typeNumber, page = 1 }= opts
      const { limit } = thunkAPI.getState().movieList

      const data = await requestMovieList({ typeNumber, limit, page })
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
  }
})

export const movieListReducer = movieListSlice.reducer
