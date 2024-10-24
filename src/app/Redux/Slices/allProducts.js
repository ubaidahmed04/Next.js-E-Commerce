import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoader:false,
  allProducts:[],
}

export const productSlice = createSlice({
  name: 'allproducts',
  initialState,
  reducers: {
    getProductStart: (state,action) => {
        state.isLoader= true
    },
    getProductSuccess: (state,action) => {
        state.isLoader= false
        state.allProducts = action.payload
    },
    
  },
})

export const {getProductStart,getProductSuccess,} = productSlice.actions

export default productSlice.reducer