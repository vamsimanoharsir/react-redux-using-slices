import React from 'react';
import {createSlice} from '@reduxjs/toolkit';//for redux

export const UserSlice=createSlice({//slice has its own state, reducer, action
    name:'value',
    initialState:{
        value:null
    },
    reducers:{
        login:(state,action)=>{//login and logout are reducers that take state and action as arguments
            state.value=action.payload
        },
        logout:(state)=>{
            state.value='state became null';
        }
    }
})

export const {login,logout}=UserSlice.actions//exporting slice actions
export const selectValue=(state)=>state//exporting slice state
export default UserSlice.reducer;//exporting slice reducer