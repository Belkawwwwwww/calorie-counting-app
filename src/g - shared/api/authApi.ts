import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    RegistrationResponseSchema,
    RegScheme,
} from '@/f - entities/auth/model/registrationSchema';
import {
    AuthResponseScheme,
    AuthScheme,
} from '@/f - entities/auth/model/authScheme';

const API = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/' }),
    endpoints: (build) => ({
        registerUser: build.mutation<
            typeof RegistrationResponseSchema._output,
            Partial<RegScheme>
        >({
            query: (body) => ({
                url: 'user',
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
                url: 'auth',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        getUser: build.query({
            query: () => ({
                url: 'user',
                method: 'GET',
                providesTags: ['User'],
                // credentials: 'include',
            }),
        }),
    }),
});

export const { useRegisterUserMutation, useAuthUserMutation, useGetUserQuery } =
    API;
export default API;
