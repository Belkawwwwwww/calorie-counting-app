import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateSurveyResponseSchema, dataScheme } from '../model/createSurvey';

const surveyAPI = createApi({
    reducerPath: 'surveyAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dev-eda.ibell.online/' }),
    endpoints: (build) => ({
        createSurvey: build.mutation<
            typeof CreateSurveyResponseSchema._output,
            typeof dataScheme._input
        >({
            query: (body) => ({
                url: 'api/v1/user/survey',
                method: 'POST',
                body,
                providesTags: ['User'],
                credentials: 'include',
            }),
        }),
        getSurvey: build.query<typeof CreateSurveyResponseSchema._output, void>(
            {
                query: () => ({
                    url: 'api/v1/user/survey',
                    method: 'GET',
                    providesTags: ['User'],
                    credentials: 'include',
                }),
            }
        ),
        getUserData: build.query<
            typeof CreateSurveyResponseSchema._output,
            void
        >({
            query: () => ({
                url: 'api/v1/user/survey',
                method: 'GET',
                providesTags: ['User'],
                credentials: 'include',
            }),
        }),
    }),
});

export const {
    useCreateSurveyMutation,
    useGetSurveyQuery,
    useGetUserDataQuery,
} = surveyAPI;
export default surveyAPI;
