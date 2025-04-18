import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SessionState = {
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
        },
        logout(state) {
            state.is_authenticated = false;
            state.isLoading = false
        }
    },
});

export const { setAuth, logout } = sessionSlice.actions;
