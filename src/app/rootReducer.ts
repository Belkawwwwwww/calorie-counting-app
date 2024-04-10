import {combineReducers} from "redux";
import {userSlice} from "@/6entities/user";

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer
});