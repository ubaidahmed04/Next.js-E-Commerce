"use client"
import { createSlice } from "@reduxjs/toolkit";
export const productSlice = createSlice({
    initialState:{
        isProduct:[],
        isFetching:false,
        isError:false 
    },
    name:"product",
    reducers:{
        gerProductStart:(state)=>{
            state.isFetching = true,
            state.isError = null;
        },
        gerProductSuccess:(state,action)=>{
            state.isProduct= action.payload;
            state.isFetching = false
        },
        gerProductFailed:(state)=>{
            state.isFetching = false
            state.isError = true
        },
      
    }

})

export const {gerProductSuccess, gerProductStart, gerProductFailed, } = productSlice.actions
export default productSlice.reducer;

