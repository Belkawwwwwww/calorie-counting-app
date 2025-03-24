import {
    activityTranslations,
    genderTranslations,
    goalTranslations,
} from '@/g_shared/lib/utils/translation';

type TranslatedProfileData = {
    gender: string;
    target: string;
    activity: string;
};

export const translateProfileData = (
    gender?: string,
    target?: string,
    activity?: string
): TranslatedProfileData => {
    return {
        gender: genderTranslations[gender || ''] || gender || '',
        target: goalTranslations[target || ''] || target || '',
        activity: activityTranslations[activity || ''] || activity || '',
    };
};
