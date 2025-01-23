import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import {
    AuthInput,
    AuthResponse,
    RegistrationInput,
    RegistrationResponse,
} from '../type/authTypes';

const authAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    endpoints: (build) => ({
        registerUser: build.mutation<RegistrationResponse, RegistrationInput>({
            query: (body) => ({
                url: 'api/v1/user/register',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        authUser: build.mutation<AuthResponse, AuthInput>({
            query: (body) => ({
                url: 'api/v1/user/auth',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        logoutUser: build.mutation<void, void>({
            query: () => ({
                url: '/api/v1/user/logout',
                method: 'POST',
                credentials: 'include',
            }),
        }),

        fetchUserSession: build.query<AuthResponse, void>({
            query: () => ({
                url: 'api/v1/user/profile',
                method: 'GET',
                providesTags: ['User'],
                credentials: 'include',
            }),
        }),
    }),
});

export const {
    useRegisterUserMutation,
    useAuthUserMutation,
    useFetchUserSessionQuery,
    useLogoutUserMutation,
} = authAPI;
export default authAPI;
