import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SessionState {
    is_authenticated: boolean;
    isLoading: boolean;
}

const initialState: SessionState = {
    is_authenticated: false,
    isLoading: true,
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setAuth(state, { payload }: PayloadAction<boolean>) {
            state.is_authenticated = payload;
            state.isLoading = false;
        },
    },
});

export const { setAuth } = sessionSlice.actions;
