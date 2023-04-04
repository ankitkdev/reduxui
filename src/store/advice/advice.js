import { createSlice } from "@reduxjs/toolkit";
import { getAdvice } from "./actions";

const initialState = {
    data: []
}

export const adviceSlice = createSlice({
    name: 'advice',
    initialState,
    extraReducers: {
        [getAdvice.fulfilled]: (state, {payload}) =>{
            state.data = payload;
        }
    }
})

export default adviceSlice.reducer;