// import {UserObject} from "@/f - entities/user/model/type";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    user_id: any | null;
    gender: string;
    target: string;
    age: number;
    growth: number;
    birthday: string;
    activity: string;
    weight: number;
}

const initialState: UserState = {
    user_id: null,
    gender: '',
    target: '',
    age: 0,
    growth: 0,
    birthday: '',
    activity: '',
    weight: 0,
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
