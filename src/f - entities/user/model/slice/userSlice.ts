// import {UserObject} from "@/f - entities/user/model/type";
import {createSlice} from "@reduxjs/toolkit";

interface UserState {
    users: any | null
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
        // setUser(state, {payload}: PayloadAction<any | null>) {
        //     state.users = payload
        // }
    }
})

