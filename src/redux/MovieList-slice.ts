import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestMovieList } from '../services/MovieList'

export const fetchMovieList = createAsyncThunk(
  'movieList/fetchMovieListStatus',
  async (opts: any = {}, thunkAPI) => {
    try {
      const { typeNumber } = opts
      const data = await requestMovieList({ typeNumber })
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const movieListSlice = createSlice({
  name: 'movieList',
  initialState: {
    movieList: null,
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieList.pending, (state: any) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchMovieList.fulfilled, (state: any, action) => {
        state.status = 'resolved'
        state.movieList = action.payload
      })
      .addCase(fetchMovieList.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  }
})

export const movieListReducer = movieListSlice.reducer
