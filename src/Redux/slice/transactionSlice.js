import { createSlice } from "@reduxjs/toolkit";




const transactionSlice = createSlice({
    name:'transactionData',
    initialState:{
        list:[]
    },
    reducers:{
        fetchTransaction:((state,action)=>{
            state.list = action.payload
        })
    }

})

export default transactionSlice.reducer

export const {fetchTransaction} = transactionSlice.actions