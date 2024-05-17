import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name:'userData',
    initialState:null,
    reducers:{
        loginAction:((state,action)=>{
                state.user = action.payload
        }),
        logoutAction:((state,action)=>{
            state.user = null
        })
    }
})

export default authSlice.reducer

export const {loginAction,logoutAction} = authSlice.actions