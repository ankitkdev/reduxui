import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./createAdvice";

export default configureStore({
    reducer:{
        advice: createReducer,
    },
})