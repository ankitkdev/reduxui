import { configureStore } from "@reduxjs/toolkit";
import createReducer, { reducer } from "./createAdvice";

const redu = {
    add: createReducer
}

const store =  configureStore({
    reducer: reducer,
    devTools:true
})

export default store;