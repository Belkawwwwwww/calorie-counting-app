import { combineReducers } from 'redux';
import { userSlice } from '@/f_entities/redux/user';
import { sessionSlice } from '@/f_entities/redux/session/modele/slice/session';
import { pendingSlice } from '@/f_entities/redux/pending/modele/slice/isPending';
import authAPI from '@/g_shared/api/authApi';
import surveyAPI from '@/d_widgets/test_page/api/surveyApi';

export const rootReducer = combineReducers({
    [pendingSlice.name]: pendingSlice.reducer,
    [sessionSlice.name]: sessionSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [surveyAPI.reducerPath]: surveyAPI.reducer,
});
