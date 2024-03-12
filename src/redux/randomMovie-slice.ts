import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestRandomMovie } from '../services/randomMovie'

export const fetchRandomMovie = createAsyncThunk(
  'randomMovie/fetchRandomMovieStatus',
  async (_, thunkAPI) => {
    try {
      const data = await requestRandomMovie()
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const randomMovieSlice = createSlice({
  name: 'randomMovie',
  initialState: {
    data: null,
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomMovie.pending, (state: any) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchRandomMovie.fulfilled, (state: any, action) => {
        state.status = 'resolved'
        state.data = action.payload
      })
      .addCase(fetchRandomMovie.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  }
})

export const randomMovieReducer = randomMovieSlice.reducer
