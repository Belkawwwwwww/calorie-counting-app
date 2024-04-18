import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SessionState  {
    is_authenticated: boolean
    error?: string | undefined
}
const initialState: SessionState = {
    is_authenticated: false
}
export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setError(state, {payload}: PayloadAction<string | undefined>) {
            state.error = payload;
        },
    }
})