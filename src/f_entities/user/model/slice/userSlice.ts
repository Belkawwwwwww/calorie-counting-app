import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../type';

const initialState: UserState = {
    user_id: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, { payload }: PayloadAction<any | null>) {
            state.user_id = payload;
        },
    },
});
