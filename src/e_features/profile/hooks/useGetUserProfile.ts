import { useFetchUser } from '@/e_features/auth/lib/hooks/useAuthHooks';
import { useGetUserSurvey } from '@/e_features/survey/hooks';
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
            refetchUserData();
        }
    }, [userSessionData]);
    return { userSessionData, userData, isLoading };
};
