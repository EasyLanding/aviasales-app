import { combineReducers, configureStore } from '@reduxjs/toolkit'

import ticketsReducer from './tickets'

const rootReducer = combineReducers({ tickets: ticketsReducer })

export function createStore() {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  })
}
