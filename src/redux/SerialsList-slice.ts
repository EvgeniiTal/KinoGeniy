import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestSerialsList, requestSerial } from '../services/SerialsList'

interface InitialState {
  data: null | object,
  serial: null | object,
  status: null | string,
  error: null | string,
  limit: number,
  pagesCounter: number
}

const initialState: InitialState = {
  data: null,
  serial: null,
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


export const fetchSerialsList = createAsyncThunk(
  'serialsList/fetchSerialsListStatus',
  async (opts: Opts, thunkAPI: any )  => {
    try {
      const { typeNumber, page = 1, sortField = 'name', sortType = 1 }: Opts = opts
      const { limit }: InitialState = thunkAPI.getState().serialsList

      const data = await requestSerialsList({ typeNumber, limit, page, sortField, sortType })
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const fetchSerial = createAsyncThunk(
  'serialsList/fetchSerialStatus', async (id: string | undefined, thunkAPI: any) => {
    try {
      const data = await requestSerial(id)
      return data
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const serialsListSlice = createSlice({
  name: 'serialsList',
  initialState,
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
        state.pagesCounter = action.payload.pages
      })
      .addCase(fetchSerialsList.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
      .addCase(fetchSerial.pending, (state: any) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchSerial.fulfilled, (state: any, action) => {
        state.status = 'resolved'
        state.serial = action.payload
      })
      .addCase(fetchSerial.rejected, (state: any, action) => {
        state.status = 'rejected'
        state.error = action.payload
      })
  }
})

export const serialsListReducer = serialsListSlice.reducer
