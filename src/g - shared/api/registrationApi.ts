import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RegistrationDataSchema, RegScheme} from "@/f - entities/registration/model/registrationSchema";


const registerAPI = createApi({
    reducerPath: 'registerAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://92.118.114.163:5001/'}),
    endpoints: (build) => ({
        registerUser:  build.mutation<RegScheme, string>({
            query: (body) => ({
                url: 'user',
                method: 'POST',
                body,
            }),
            transformResponse: (response: RegScheme) => {
                RegistrationDataSchema.parse(response);
                return response
            }
        })
    }),
});

export default registerAPI;
