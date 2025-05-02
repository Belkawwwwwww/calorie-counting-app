import { SurveyInput, SurveyResponse } from '@/f_entities/survey';
import { CreateSurveyResponseSchema } from '@/f_entities/survey/model/surveyScheme';
import { handleResponse } from '@/g_shared/lib/utils';
import { ApiUrls } from '@/g_shared/model';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type SurveyTag = { type: 'Survey'; id: string | 'LIST' };

const surveyAPI = createApi({
    reducerPath: 'surveyAPI',
    baseQuery: fetchBaseQuery({ baseUrl: ApiUrls.BASE_URL }),
    tagTypes: ['Survey'],
    endpoints: (build) => ({
        createSurvey: build.mutation<SurveyResponse, SurveyInput>({
            query: (body) => ({
                url: 'api/v1/user/survey',
                method: 'POST',
                body,
                credentials: 'include',
                keepUnusedDataFor: 120,
            }),
            invalidatesTags: [{ type: 'Survey', id: 'LIST' } as SurveyTag],
            transformErrorResponse: (response) =>
                handleResponse(response, CreateSurveyResponseSchema),
        }),
        getSurvey: build.query<SurveyResponse, void>({
            query: () => ({
                url: 'api/v1/user/survey',
                method: 'GET',
                credentials: 'include',
                keepUnusedDataFor: 120,
                providesTags: ['Survey'],
            }),
        }),
    }),
});

export const { useCreateSurveyMutation, useGetSurveyQuery } = surveyAPI;
export default surveyAPI;
