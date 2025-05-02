import { ApiUrls } from '@/g_shared/model';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    AuthInput,
    AuthResponse,
    LogoutResponse,
    RegistrationInput,
} from '../type/authTypes';

import { setPending } from '@/e_features/pending/modele/action';
import { setUser } from '@/f_entities/user/model';
import { handleResponse } from '@/g_shared/lib/utils';
import { AuthResponseScheme } from '../lib/validation';
import { setAuth } from '../model/action';

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
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const backendUser_id = data?.data.id;
                    dispatch(setAuth(true));
                    dispatch(setUser({ user_id: backendUser_id }));
                } catch (error) {
                    console.error('Ошибка при авторизации:', error);
                }
            },
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
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    const backendUser_id = data?.data?.id;
                    dispatch(setAuth(true));
                    dispatch(setUser({ user_id: backendUser_id }));
                } catch (error) {
                    console.error('Ошибка при авторизации:', error);
                }
            },
        }),
        logoutUser: build.mutation<LogoutResponse, void>({
            query: () => ({
                url: '/api/v1/user/logout',
                method: 'POST',
                credentials: 'include',
                invalidatesTags: ['User'],
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(setAuth(false));
                    dispatch(setUser(null));
                } catch {
                    console.log('Ошибка при выходе');
                }
            },
        }),

        fetchUserSession: build.query<AuthResponse, void>({
            query: () => ({
                url: 'api/v1/user/profile',
                method: 'GET',
                providesTags: ['User'],
                credentials: 'include',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                dispatch(setPending(true));
                try {
                    const { data } = await queryFulfilled;
                    const userId = data?.data.id;

                    if (userId) {
                        const sessionId = sessionStorage.getItem('session_id');
                        const sessionIdNumber = sessionId
                            ? Number(sessionId)
                            : null;
                        if (sessionIdNumber !== userId) {
                            if (data.response_status === 0) {
                                dispatch(setAuth(true));
                                dispatch(setUser({ user_id: userId }));
                            } else {
                                dispatch(setAuth(false));
                            }
                        } else {
                            dispatch(setAuth(false));
                        }
                    } else {
                        dispatch(setAuth(false));
                    }
                } catch (error) {
                    console.error('Ошибка при обработке данных:', error);
                    dispatch(setAuth(false));
                } finally {
                    dispatch(setPending(false));
                }
            },
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
