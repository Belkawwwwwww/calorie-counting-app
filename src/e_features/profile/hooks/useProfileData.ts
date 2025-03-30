import { translateProfileData } from '../lib/profileTranslations';
import { useGetUserProfile } from './useGetUserProfile';

export const useProfileDataHandler = () => {
    const { userSessionData, userData, isLoading } = useGetUserProfile();
    const hasErrorResponse = userData?.response_status !== 0;
    const { first_name, last_name } = userSessionData?.data || {};
    const { gender, target, activity } = userData?.data?.data || {};

    const translatedData = translateProfileData(gender, target, activity);

    return {
        userData,
        isLoading,
        hasErrorResponse,
        first_name,
        last_name,
        translatedData,
    };
};
