import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/app/providers/store_providers/config/rootReducer';
import authAPI from '@/g_shared/api/authApi';
import surveyAPI from '@/d_widgets/test_page/api/surveyApi';

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
