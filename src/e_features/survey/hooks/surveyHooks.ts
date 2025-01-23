import { useCreateSurveyMutation, useGetUserDataQuery } from '../api/surveyApi';

export const useCreateSurvey = () => {
    const [createSurvey, { isLoading }] = useCreateSurveyMutation();
    return { createSurvey, isLoading };
};
export const useGetUserSurvey = () => {
    const { data, isLoading, refetch } = useGetUserDataQuery();
    return { data, isLoading, refetch };
};
