import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RegistrationResponseSchema, RegScheme,} from '@/f - entities/auth/model/registrationSchema';
import {AuthResponseScheme, AuthScheme,} from '@/f - entities/auth/model/authScheme';
import Cookies from 'js-cookie';


export const cookieUtils = {
    getSessionId: () => Cookies.get('sessionId'),
    setSessionId: (Session: string) => Cookies.set('Session', Session, {expires: 365}), // срок хранения cookie 1 год
    // removeSessionId: () => Cookies.remove('sessionId'),
};
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://92.118.114.163:5001/',
    prepareHeaders: (headers) => {
        let Session: string | null | undefined = cookieUtils.getSessionId();
        if (Session) {
            headers.set('X-Session-Id', Session);
        } else {
            Session = headers.get('X-Session-Id');
            if (Session) {
                cookieUtils.setSessionId(Session);
            }
        }
        return headers;
    },
});


const registerAPI = createApi({
    reducerPath: 'registration',
    baseQuery: baseQuery,
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
    }),
});

export const { useRegisterUserMutation, useAuthUserMutation } = registerAPI;
export default registerAPI;
