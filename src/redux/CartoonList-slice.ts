import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestCartoonList, requestCartoon } from '../services/CartoonList'

interface InitialState {
  data: null | object,
  cartoon: null | object,
  status: null | string,
  error: null | string,
  limit: number,
  pagesCounter: number
}

const initialState: InitialState = {
  data: null,
  cartoon: null,
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


export const fetchCartoonList = createAsyncThunk(
  'cartoonList/fetchCartoonListStatus',
  async (opts: Opts, thunkAPI: any) => {
    try {
      const { typeNumber, page = 1, sortField = 'name', sortType = 1 }: Opts = opts
      const { limit }: InitialState = thunkAPI.getState().cartoonList

      const data = await requestCartoonList({ typeNumber, limit, page, sortField, sortType })
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const fetchCartoon = createAsyncThunk(
  'cartoonList/fetchCartoonStatus', async (id: string | undefined, thunkAPI: any) => {
    try {
      const data = await requestCartoon(id)
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const cartoonListSlice = createSlice({
  name: 'cartoonList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartoonList.pending, (state: any) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchCartoonList.fulfilled, (state: any, action) => {
        state.status = 'resolved'
        state.data = action.payload
        state.pagesCounter = action.payload.pages
      })
      .addCase(fetchCartoonList.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(fetchCartoon.pending, (state: any) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchCartoon.fulfilled, (state: any, action) => {
        state.status = 'resolved'
        state.cartoon = action.payload
      })
      .addCase(fetchCartoon.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  }
})

export const cartoonListReducer = cartoonListSlice.reducer
