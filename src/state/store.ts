//1st step: create store 
// connect store to application
//install npm install @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";

export const store  = configureStore({
    reducer:{
        counter:counterReducer
    },
})


//configure store gives us the getState method, from that we will get "ReturnType" of the function to get our rootState
//in any react component whenever we are going to access the state using the selector we are going to access the 
//state using this RootState type then we will be having access to all over states easily.
export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;