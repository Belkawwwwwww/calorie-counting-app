import {createSlice} from "@reduxjs/toolkit";

interface SessionState  {
    is_authenticated: boolean
}
const initialState: SessionState = {
    is_authenticated: false
}
export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {

    }
})