import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAdvice = createAsyncThunk('advice/getAdvice', async(page, {rejectWithValue}) =>{
    try {
        const {data} = await axios.get(`https://api.adviceslip.com/advice`)
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})
