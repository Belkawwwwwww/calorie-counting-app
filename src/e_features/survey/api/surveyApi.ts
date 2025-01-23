import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import { SurveyInput, SurveyResponse } from '../type/surveyTypes';

const surveyAPI = createApi({
    reducerPath: 'surveyAPI',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    endpoints: (build) => ({
        createSurvey: build.mutation<SurveyResponse, SurveyInput>({
            query: (body) => ({
                url: 'api/v1/user/survey',
                method: 'POST',
                body,
                providesTags: ['User'],
                credentials: 'include',
            }),
        }),
        getSurvey: build.query<SurveyResponse, void>({
            query: () => ({
                url: 'api/v1/user/survey',
                method: 'GET',
                providesTags: ['User'],
                credentials: 'include',
            }),
        }),
        getUserData: build.query<SurveyResponse, void>({
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
