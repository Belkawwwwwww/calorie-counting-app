import {combineReducers} from 'redux';
import {userSlice} from '@/f - entities/redux/user';
import {sessionSlice} from '@/f - entities/redux/session/modele/slice/session';
import {pendingSlice} from '@/f - entities/redux/pending/modele/slice/isPending';
import authAPI from '@/g - shared/api/authApi';
import surveyAPI from '@/d - widgets/TestPage/api/surveyApi';

export const rootReducer = combineReducers({
    [pendingSlice.name]: pendingSlice.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [surveyAPI.reducerPath]: surveyAPI.reducer
});
