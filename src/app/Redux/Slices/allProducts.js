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
    deleteProduct: (state,action) => {
      state.isLoader = true
      state.allProducts = state.allProducts.filter((elem)=>elem._id !== action.payload)
      state.isLoader = false

    }
    
  },
})

export const {getProductStart,getProductSuccess,deleteProduct} = productSlice.actions

export default productSlice.reducer