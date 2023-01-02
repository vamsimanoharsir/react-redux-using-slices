import UserSlice from './UserSlice';
import { configureStore } from '@reduxjs/toolkit';//always done in store.js

export default configureStore({
    reducer:{//this has all actions, reducers, state
        value:UserSlice,
    }
})