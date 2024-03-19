import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestCartoonList } from '../services/CartoonList'


export const fetchCartoonList = createAsyncThunk(
  'cartoonList/fetchCartoonListStatus',
  async (opts: number, thunkAPI) => {
    try {
      const typeNumber: number = opts
      const data = await requestCartoonList({ typeNumber })
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const cartoonListSlice = createSlice({
  name: 'cartoonList',
  initialState: {
    data: null,
    status: null,
    error: null
  },
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
      })
      .addCase(fetchCartoonList.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  }
})

export const cartoonListReducer = cartoonListSlice.reducer
