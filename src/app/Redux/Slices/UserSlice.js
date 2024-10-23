import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUser:null,
}

export const userSlice = createSlice({
  name: 'currUser',
  initialState,
  reducers: {
    LoginSuccess: (state,action) => {
        state.isUser = action.payload
    },
    Logout:(state) =>{
        state.isUser = null
    }
    
  },
})

// Action creators are generated for each case reducer function
export const {LoginSuccess,Logout} = userSlice.actions

export default userSlice.reducer