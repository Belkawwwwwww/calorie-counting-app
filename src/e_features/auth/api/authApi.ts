import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import {
    AuthInput,
    AuthResponse,
    LogoutResponse,
    RegistrationInput,
} from '../type/authTypes';
import {
    AuthResponseScheme,
    LogoutResponseScheme,
} from '@/g_shared/lib/validation/authScheme';
import { handleResponse } from '@/g_shared/lib/utils/responseHandler';

const authAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    keepUnusedDataFor: 1200,
    endpoints: (build) => ({
        registerUser: build.mutation<AuthResponse, RegistrationInput>({
            query: (body) => ({
                url: 'api/v1/user/register',
                method: 'POST',
                body,
                credentials: 'include',
                providesTags: ['User'],
            }),
            transformResponse: (response) =>
                handleResponse(response, AuthResponseScheme),
        }),
        authUser: build.mutation<AuthResponse, AuthInput>({
            query: (body) => ({
                url: 'api/v1/user/auth',
                method: 'POST',
                body,
                credentials: 'include',
                providesTags: ['User'],
            }),
            transformResponse: (response) =>
                handleResponse(response, AuthResponseScheme),
        }),
        logoutUser: build.mutation<LogoutResponse, void>({
            query: () => ({
                url: '/api/v1/user/logout',
                method: 'POST',
                credentials: 'include',
                providesTags: ['User'],
            }),
            transformResponse: (response) =>
                handleResponse(response, LogoutResponseScheme),
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
