import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserState = {
    user_id: null,
    gender: null,
    target: null,
    age: null,
    growth: null,
    birthday: null,
    activity: null,
    weight: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, { payload }: PayloadAction<any | null>) {
            state.user_id = payload;
        },
        setUserDetails(state, { payload }: PayloadAction<Partial<UserState>>) {
            Object.assign(state, payload);
        },
    },
});
