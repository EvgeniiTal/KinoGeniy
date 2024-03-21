import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestAnimeList, requestAnime } from '../services/AnimeList'

interface InitialState {
  data: null | object,
  anime: null | object,
  status: null | string,
  error: null | string | unknown,
  limit: number,
  pagesCounter: number
}

const initialState: InitialState = {
  data: null,
  anime: null,
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

export const fetchAnimeList = createAsyncThunk(
  'animeList/fetchAnimeListStatus',
  async (opts: Opts, thunkAPI: any) => {
    try {
      const { typeNumber, page = 1, sortField = 'name', sortType = 1 }: Opts = opts
      const { limit }: InitialState = thunkAPI.getState().animeList

      const data = await requestAnimeList({ typeNumber, limit, page, sortField, sortType })
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const fetchAnime = createAsyncThunk(
  'animeList/fetchAnimeStatus', async (id: string | undefined, thunkAPI: any) => {
    try {
      const data = await requestAnime(id)
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const animeListSlice = createSlice({
  name: 'animeList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeList.pending, (state: InitialState) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchAnimeList.fulfilled, (state: InitialState, action) => {
        state.status = 'resolved'
        state.data = action.payload
        state.pagesCounter = action.payload.pages
      })
      .addCase(fetchAnimeList.rejected, (state: InitialState, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(fetchAnime.pending, (state: InitialState) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchAnime.fulfilled, (state: InitialState, action) => {
        state.status = 'resolved'
        state.anime = action.payload
      })
      .addCase(fetchAnime.rejected, (state: InitialState, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  }
})

export const animeListReducer = animeListSlice.reducer
