import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    RegistrationResponseSchema,
    RegScheme,
} from '@/f - entities/auth/model/registrationSchema';
import {
    AuthResponseScheme,
    AuthScheme,
} from '@/f - entities/auth/model/authScheme';

const registerAPI = createApi({
    reducerPath: 'registration',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://92.118.114.163:5001/' }),
    endpoints: (build) => ({
        registerUser: build.mutation<
            typeof RegistrationResponseSchema._output,
            Partial<RegScheme>
        >({
            query: (body) => ({
                url: 'user',
                method: 'POST',
                body,
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
            }),
        }),
    }),
});

export const { useRegisterUserMutation, useAuthUserMutation } = registerAPI;
export default registerAPI;
