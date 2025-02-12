import { ProtectedRoute } from '@/e_features/auth';
import React from 'react';
import {
    AboutProfile,
    BtnContainer,
    ContainerProfile,
    Main,
    StyledUserProfile,
    Username,
} from './style';
import { ProfileNavbar } from '@/d_widgets/user_profile/navbar/ui/ProfileNavbar';
import { Layout } from '@/g_shared/ui/layout';
import { ProfilePhoto } from '@/d_widgets/user_profile/profilePhoto/ui/ProfilePhoto';
import { BodyMeasurements } from '@/d_widgets/user_profile/bodyMeasurements/ui/BodyMeasurements';
import { ProfileInfo } from '@/d_widgets/user_profile/profileInfo/ui/ProfileInfo';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import { Message } from '@/d_widgets/nutrition_dashboard';
import { RouteEnum } from '@/g_shared/model';
import {
    activityTranslations,
    genderTranslations,
    goalTranslations,
} from '@/g_shared/lib/utils/translation';
import { UpdateButton, useGetUserProfile } from '@/e_features/user';

export const ProfilePage = () => {
    console.log('отработал профиль пэйдж');
    const { userSessionData, userData, isLoading } = useGetUserProfile();
    const first_name = userSessionData?.data?.first_name;
    const last_name = userSessionData?.data?.last_name;
    if (isLoading && !userData) {
        return <LoadingIndicator />;
    }
    if (!userData) {
        return <p>No user data available.</p>;
    }
    const { response_status } = userData;
    const { gender, target, growth, activity, weight } =
        userData.data?.data || {};
    if (response_status !== 0) {
        console.log(userData);
        return <Message href={RouteEnum.TEST} />;
    }

    return (
        <ProtectedRoute>
            <StyledUserProfile>
                <ProfileNavbar />
                <Layout>
                    <ProfilePhoto gender={gender} />
                    <BtnContainer>
                        <UpdateButton />
                        <BodyMeasurements />
                    </BtnContainer>
                    <ContainerProfile>
                        <AboutProfile>
                            <Username>
                                {first_name} {last_name}
                            </Username>
                        </AboutProfile>
                    </ContainerProfile>
                    <Main>
                        <ProfileInfo
                            gender={genderTranslations[gender] || gender}
                            target={goalTranslations[target] || target}
                            growth={growth}
                            activity={
                                activityTranslations[activity] || activity
                            }
                            weight={weight}
                        />
                    </Main>
                </Layout>
            </StyledUserProfile>
        </ProtectedRoute>
    );
};
