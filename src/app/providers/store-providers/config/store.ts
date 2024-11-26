import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/app/providers/store-providers/config/rootReducer';
import authAPI from '@/g - shared/api/authApi';
import surveyAPI from '@/d - widgets/TestPage/api/surveyApi';

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                authAPI.middleware,
                surveyAPI.middleware
            ),
    });
};

export const store = setupStore();
export type RootState = ReturnType<AppStore['getState']>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
