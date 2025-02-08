import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/app/providers/store_providers/config/rootReducer';
import surveyAPI from '@/e_features/survey/api/surveyApi';
import authAPI from '@/e_features/auth/api/authApi';
import bzuAPI from '@/e_features/bzu/api/bzuApi';
import foodAPI from '@/e_features/food/api/foodApi';

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                authAPI.middleware,
                surveyAPI.middleware,
                bzuAPI.middleware,
                foodAPI.middleware
            ),
    });
};

export const store = setupStore();
export type RootState = ReturnType<AppStore['getState']>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
