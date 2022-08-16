/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    isLoading: false,
    entity: [],
    slices: 5,
    activeSort: 'САМЫЙ ДЕШЕВЫЙ',
    transfers: [
      { name: 'Все', checked: true },
      { name: 'Без пересадок', checked: false, stops: 0 },
      { name: '1 пересадка', checked: false, stops: 1 },
      { name: '2 пересадки', checked: false, stops: 2 },
      { name: '3 пересадки', checked: false, stops: 3 },
    ],
    sorts: [
      { name: 'САМЫЙ ДЕШЕВЫЙ', active: true },
      { name: 'САМЫЙ БЫСТРЫЙ', active: false },
      { name: 'ОПТИМАЛЬНЫЙ', active: false },
    ],
    error: '',
  },
  reducers: {
    ticketsRequested: (state) =>
    {
      state.isLoading = true
    },
    ticketsReceived: (state, action) =>
    {
      state.entity = [...state.entity, ...action.payload] //? ...
    },
    ticketsRequestFiled: (state, action) =>
    {
      state.error = action.payload
    },
    ticketsRequestedComplete: (state) =>
    {
      state.isLoading = false
    },
    ticketsSorting (state, action)
    {
      state.activeSort = action.payload
      state.sorts = state.sorts.map((item) =>
        item.name === action.payload ? { ...item, active: true } : { ...item, active: false }
      )
    },
    ticketsSetTransferValue (state, action)
    {
      state.transfers = state.transfers.map((item) =>
        item.name === action.payload ? { ...item, checked: !item.checked } : item
      )
    },
    ticketsSetAllTransferValues (state)
    {
      state.transfers = state.transfers.map((item) => ({ ...item, checked: true }))
    },

    ticketsRemoveAllTransferValues (state)
    {
      state.transfers = state.transfers.map((item) => ({ ...item, checked: false }))
    },
    incrementTicketsItem (state)
    {
      state.slices += 5
    },
  },
})
const { actions, reducer: ticketsReducer } = ticketSlice
export const {
  ticketsRequested,
  ticketsReceived,
  ticketsRequestFiled,
  ticketsRequestedComplete,
  ticketsSorting,
  ticketsSetTransferValue,
  ticketsSetAllTransferValues,
  ticketsRemoveAllTransferValues,
  incrementTicketsItem,
} = actions

export const fetchData = createAsyncThunk(
  'main/fetchData',
  async function (_, { dispatch })
  {
    let loading = true

    const getData = async (searchId) => axios.get(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`)
      .then(({ data }) =>
      {
        dispatch(ticketsReceived(data.tickets))
        if (loading)
        {
          dispatch(ticketsRequestedComplete(false))
          loading = false
        }
        if (!data.stop) getData(searchId)
      }).catch((error) =>
      {
        if (error.response.status === 500)
        {
          getData(searchId)
        } else
        {
          dispatch(ticketsRequestedComplete(false))
          dispatch(ticketsRequestFiled(error.message))
        }
      })

    dispatch(ticketsRequested(true))

    await axios.get('https://front-test.dev.aviasales.ru/search')
      .then(({ data: { searchId } }) =>
      {
        getData(searchId)
      })
      .catch((error) =>
      {
        dispatch(ticketsRequestFiled(error.message))
        dispatch(ticketsRequestedComplete(false))
      })
  },
)
export default ticketsReducer
