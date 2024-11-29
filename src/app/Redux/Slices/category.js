import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getCategory:[],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    
    getCategorySuccess:(state,action) =>{
      state.getCategory = action.payload
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { getCategorySuccess } = categorySlice.actions

export default categorySlice.reducer