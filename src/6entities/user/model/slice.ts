import {UserObject} from "@/6entities/user/model/type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: UserObject | null
    isLoading: boolean
    error?: string | null;
}

const initialState: UserState = {
    users: null,
    isLoading: false,
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, {payload}: PayloadAction<UserObject | null>) {
            state.users = payload
        }
    }
})

