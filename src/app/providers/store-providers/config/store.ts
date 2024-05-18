import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/app/providers/store-providers/config/rootReducer';
import registerAPI from '@/g - shared/api/authApi';

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(registerAPI.middleware),
    });
};

export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
