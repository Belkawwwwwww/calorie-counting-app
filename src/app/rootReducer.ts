import {combineReducers} from "redux";
import {userSlice} from "@/f - entities/user";
import {sessionSlice} from "@/f - entities/session/modele/slice/session";

export const rootReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
    [sessionSlice.name] : sessionSlice.reducer
});