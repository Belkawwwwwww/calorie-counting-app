import {combineReducers} from 'redux';
import {userSlice} from '@/f - entities/redux/user';
import {sessionSlice} from '@/f - entities/redux/session/modele/slice/session';
import API from '@/f - entities/api/authApi';
import {pendingSlice} from '@/f - entities/redux/pending/modele/slice/isPending';

export const rootReducer = combineReducers({
    [pendingSlice.name]: pendingSlice.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [API.reducerPath]: API.reducer,
});
