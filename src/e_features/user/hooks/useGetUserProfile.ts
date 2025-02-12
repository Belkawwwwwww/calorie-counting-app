import { useFetchUser } from '@/e_features/auth/hooks/authHooks';
import { useGetUserSurvey } from '@/e_features/survey/hooks/useSurveyHooks';
import { useEffect } from 'react';

export const useGetUserProfile = () => {
    const { data: userSessionData } = useFetchUser();
    const {
        data: userData,
        isLoading,
        refetch: refetchUserData,
        isSuccess,
    } = useGetUserSurvey();
    useEffect(() => {
        if (isSuccess && userSessionData) {
            // Вызываем рефетч данных пользователя когда сессия успешна
            refetchUserData();
        }
    }, [userSessionData]);
    return { userSessionData, userData, isLoading };
};
