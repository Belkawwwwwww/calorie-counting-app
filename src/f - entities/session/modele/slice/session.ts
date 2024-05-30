import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
    is_authenticated: boolean;
}

const initialState: SessionState = {
    is_authenticated: false,
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setAuth(state, { payload }: PayloadAction<boolean>) {
            state.is_authenticated = payload;
        },
    },
});

export const { setAuth } = sessionSlice.actions;
