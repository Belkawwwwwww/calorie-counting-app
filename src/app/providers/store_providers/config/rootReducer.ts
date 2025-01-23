import { combineReducers } from 'redux';
import { userSlice } from '@/f_entities/redux/user';
import { sessionSlice } from '@/f_entities/redux/session/modele/slice/session';
import { pendingSlice } from '@/f_entities/redux/pending/modele/slice/isPending';
import surveyAPI from '@/e_features/survey/api/surveyApi';
import authAPI from '@/e_features/auth/api/authApi';
import bzuAPI from '@/e_features/bzu/api/bzuApi';

export const rootReducer = combineReducers({
    [pendingSlice.name]: pendingSlice.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [surveyAPI.reducerPath]: surveyAPI.reducer,
    [bzuAPI.reducerPath]: bzuAPI.reducer,
});
