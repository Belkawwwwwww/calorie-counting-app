import { useCreateSurveyMutation, useGetSurveyQuery } from '../api/surveyApi';

export const useCreateSurvey = () => {
    const [createSurvey, { isLoading }] = useCreateSurveyMutation();
    return { createSurvey, isLoading };
};
export const useGetUserSurvey = () => {
    const { data, isLoading, refetch, isSuccess } = useGetSurveyQuery();
    return { data, isLoading, refetch, isSuccess };
};
