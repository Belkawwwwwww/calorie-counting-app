// import {UserObject} from "@/f - entities/user/model/type";
import {createSlice} from "@reduxjs/toolkit";

interface UserState {
    users: any | null
}

const initialState: UserState = {
    users: null,
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

