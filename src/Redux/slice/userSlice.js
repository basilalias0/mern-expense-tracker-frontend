import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name:'userData',
    initialState:{
        user:JSON.parse(localStorage.getItem('userData'))  || null,
    },

    reducers:{
        loginAction:((state,action)=>{
                state.user = action.payload

        }),
        logoutAction:((state,action)=>{
            state.user = null
        }),
        userAction:((state,action)=>{
            state.user = action.payload
        })
    }
})

export default authSlice.reducer

export const {loginAction,logoutAction,userAction} = authSlice.actions