import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../slice/userSlice'
import transactionSlice from '../slice/transactionSlice'


export const store = configureStore({
  reducer: {
    auth:authSlice,
    transaction:transactionSlice
  },
})