import {combineReducers} from "redux";
import {userSlice} from "@/6entities/user";
import {sessionSlice} from "@/6entities/session/modele/slice/session";

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
    [sessionSlice.name] : sessionSlice.reducer
});