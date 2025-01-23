import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    RegistrationResponseSchema,
    RegScheme,
} from '@/e_features/auth/model/registrationSchema';
import {
    AuthResponseScheme,
    AuthScheme,
} from '@/e_features/auth/model/authScheme';
import { ApiUrls } from '../model';

const authAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    endpoints: (build) => ({
        registerUser: build.mutation<
            typeof RegistrationResponseSchema._output,
            typeof RegScheme._input
        >({
            query: (body) => ({
                url: 'api/v1/user/register',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        authUser: build.mutation<
            typeof AuthResponseScheme._output,
            typeof AuthScheme._input
        >({
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

        fetchUserSession: build.query<typeof AuthResponseScheme._output, void>({
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