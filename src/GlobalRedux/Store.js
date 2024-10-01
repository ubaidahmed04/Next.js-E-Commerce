"use client"
import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from '@/GlobalRedux/Slices/productSlice'
 const store =  configureStore({
  reducer: {
    product: ProductReducer,
  },
})
export {store}