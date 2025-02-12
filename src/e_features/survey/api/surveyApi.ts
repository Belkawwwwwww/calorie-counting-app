import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiUrls } from '@/g_shared/model';
import { SurveyInput, SurveyResponse } from '@/f_entities/survey';

const surveyAPI = createApi({
    reducerPath: 'surveyAPI',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    endpoints: (build) => ({
        createSurvey: build.mutation<SurveyResponse, SurveyInput>({
            query: (body) => ({
                url: 'api/v1/user/survey',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        getSurvey: build.query<SurveyResponse, void>({
            query: () => ({
                url: 'api/v1/user/survey',
                method: 'GET',
                credentials: 'include',
            }),
        }),
    }),
});

export const { useCreateSurveyMutation, useGetSurveyQuery } = surveyAPI;
export default surveyAPI;
