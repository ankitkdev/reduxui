import { configureStore } from "@reduxjs/toolkit";
import adviceReducer  from "./advice/advice";

const store =  configureStore({
    reducer: {
        adv: adviceReducer
    }
})

export default store;