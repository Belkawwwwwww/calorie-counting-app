import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface isPendingState {
    pending: boolean;
}

const initialState: isPendingState = {
    pending: true,
};

export const pendingSlice = createSlice({
    name: 'pending',
    initialState,
    reducers: {
        setPending(state, { payload }: PayloadAction<boolean>) {
            state.pending = payload;
        },
    },
});
