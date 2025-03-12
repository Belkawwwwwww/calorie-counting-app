import { ProtectedRoute } from '@/e_features/auth';
import React from 'react';
import { BtnContainer, StyledUserProfile } from './style';
import { Layout } from '@/g_shared/ui/layout';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import { RouteEnum } from '@/g_shared/model';
import {
    activityTranslations,
    genderTranslations,
    goalTranslations,
} from '@/g_shared/lib/utils/translation';
import { useGetUserProfile } from '@/e_features/user';
import { ProfileNavbar } from '@/d_widgets/navbar_profile';
import { ProfileInfo } from '@/d_widgets/profile_info';
import { MessageNoResponse } from '@/g_shared/ui/message_no_response';
import { AboutProfile } from '@/d_widgets/about_profile';
import { BodyMeasurements } from '@/d_widgets/body_measurements';
import { UpdateButton } from '@/g_shared/ui/update_button';

export const ProfilePage = () => {
    const { userSessionData, userData, isLoading } = useGetUserProfile();
    const { first_name, last_name } = userSessionData?.data || {};
    if (isLoading && !userData) {
        return <LoadingIndicator />;
    }
    if (!userData) {
        return <p>No user data available.</p>;
    }
    const { gender, target, growth, activity, weight } =
        userData.data?.data || {};
    const hasErrorResponse = userData.response_status !== 0;

    return (
        <ProtectedRoute>
            <StyledUserProfile>
                <ProfileNavbar />
                <Layout>
                    {hasErrorResponse ? (
                        <>
                            <MessageNoResponse href={RouteEnum.TEST} />
                        </>
                    ) : (
                        <>
                            <BtnContainer>
                                <UpdateButton />
                                <BodyMeasurements />
                            </BtnContainer>
                            <AboutProfile
                                gender={gender}
                                first_name={first_name}
                                last_name={last_name}
                            />
                            <ProfileInfo
                                gender={genderTranslations[gender] || gender}
                                target={goalTranslations[target] || target}
                                growth={growth}
                                activity={
                                    activityTranslations[activity] || activity
                                }
                                weight={weight}
                            />
                        </>
                    )}
                </Layout>
            </StyledUserProfile>
        </ProtectedRoute>
    );
};
