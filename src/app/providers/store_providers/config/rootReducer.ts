import authAPI from '@/e_features/auth/api/authApi';
import { sessionSlice } from '@/e_features/auth/model/slice/session';
import bzuAPI from '@/e_features/bzu/api/bzuApi';
import { createMealSlice } from '@/e_features/create_or_update_meal/model/slice/createOrUpdateMealSlice';
import foodAPI from '@/e_features/create_food/api/mealApi';
import { pendingSlice } from '@/e_features/pending/modele/slice/isPending';
import surveyAPI from '@/e_features/survey/api/surveyApi';
import { userSlice } from '@/f_entities/user';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    [pendingSlice.name]: pendingSlice.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [surveyAPI.reducerPath]: surveyAPI.reducer,
    [bzuAPI.reducerPath]: bzuAPI.reducer,
    [foodAPI.reducerPath]: foodAPI.reducer,
    [createMealSlice.name]: createMealSlice.reducer,
});
