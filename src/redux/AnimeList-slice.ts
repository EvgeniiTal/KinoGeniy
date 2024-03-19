import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestAnimeList } from '../services/AnimeList'


export const fetchAnimeList = createAsyncThunk(
  'animeList/fetchAnimeListStatus',
  async (opts: number, thunkAPI) => {
    try {
      const typeNumber: number = opts
      const data = await requestAnimeList({ typeNumber })
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const animeListSlice = createSlice({
  name: 'animeList',
  initialState: {
    data: null,
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeList.pending, (state: any) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchAnimeList.fulfilled, (state: any, action) => {
        state.status = 'resolved'
        state.data = action.payload
      })
      .addCase(fetchAnimeList.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  }
})

export const animeListReducer = animeListSlice.reducer
