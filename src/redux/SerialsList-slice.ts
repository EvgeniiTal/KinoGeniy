import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestSerialsList } from '../services/SerialsList'


export const fetchSerialsList = createAsyncThunk(
  'serialsList/fetchSerialsListStatus',
  async (opts: number, thunkAPI) => {
    try {
      const typeNumber: number = opts
      const data = await requestSerialsList({ typeNumber })
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const serialsListSlice = createSlice({
  name: 'serialsList',
  initialState: {
    data: null,
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSerialsList.pending, (state: any) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchSerialsList.fulfilled, (state: any, action) => {
        state.status = 'resolved'
        state.data = action.payload
      })
      .addCase(fetchSerialsList.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  }
})

export const serialsListReducer = serialsListSlice.reducer
