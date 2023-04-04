import { createSlice } from "@reduxjs/toolkit";

export const createAdvice = createSlice({
    name: 'advice',
    initialState: {
        value: 'Go and Sleep',
    },
    reducers: {
        bad: (state) => {
            state.value = "Go to bar"
        },
        good: (state) => {
            state.value = "Go to gym"
        }
    }
})

export const {bad, good} = createAdvice.actions;

export default createAdvice.reducer;