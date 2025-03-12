import { combineReducers } from 'redux';
import { userSlice } from '@/f_entities/user';
import { sessionSlice } from '@/e_features/auth/modele/slice/session';
import { pendingSlice } from '@/e_features/pending/modele/slice/isPending';
import surveyAPI from '@/e_features/survey/api/surveyApi';
import authAPI from '@/e_features/auth/api/authApi';
import bzuAPI from '@/e_features/bzu/api/bzuApi';
import foodAPI from '@/e_features/food/api/mealApi';

export const rootReducer = combineReducers({
    [pendingSlice.name]: pendingSlice.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [surveyAPI.reducerPath]: surveyAPI.reducer,
    [bzuAPI.reducerPath]: bzuAPI.reducer,
    [foodAPI.reducerPath]: foodAPI.reducer,
});
