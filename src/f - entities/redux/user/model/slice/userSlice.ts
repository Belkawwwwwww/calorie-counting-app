// import {UserObject} from "@/f - entities/user/model/type";
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
    users: any | null;
    error?: string | undefined;
}

const initialState: UserState = {
    users: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setError(state, {payload}: PayloadAction<string | undefined>) {
            state.error = payload;
        },
        setUser(state, {payload}: PayloadAction<any | null>) {
            state.users = payload;
        },
    },
});
