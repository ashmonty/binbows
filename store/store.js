import { configureStore } from '@reduxjs/toolkit'
import windowReducer from './window/windowSlice'

export default configureStore({
  reducer: {
    windows: windowReducer
  }
})