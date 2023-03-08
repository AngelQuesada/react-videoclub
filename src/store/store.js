import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { videoclubSlice } from './videoclub/videoclubSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    videoclub: videoclubSlice.reducer
  },
})