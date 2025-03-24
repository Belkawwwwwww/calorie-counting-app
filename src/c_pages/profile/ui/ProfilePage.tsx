import { ProtectedRoute } from '@/e_features/auth';
import React from 'react';
import { StyledUserProfile } from './style';
import { Layout } from '@/g_shared/ui/layout';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import { RouteEnum } from '@/g_shared/model';
import { ProfileNavbar } from '@/d_widgets/navbar_profile';
import { MessageNoResponse } from '@/g_shared/ui/message_no_response';
import { useProfileDataHandler } from '@/e_features/profile/hooks/useProfileData';
import { ProfilePageContent } from '@/d_widgets/profile_page_content/ui/ProfilePageContent';

export const ProfilePage = () => {
    const {
        userData,
        isLoading,
        hasErrorResponse,
        first_name,
        last_name,
        translatedData,
    } = useProfileDataHandler();

    if (isLoading && !userData) {
        return <LoadingIndicator />;
    }
    if (!userData) {
        return <p>Данные о пользователe отсутствуют</p>;
    }
    const { growth, weight } = userData.data?.data || {};

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
                            <ProfilePageContent
                                gender={translatedData.gender}
                                first_name={first_name ?? ''}
                                last_name={last_name ?? ''}
                                target={translatedData.target}
                                growth={growth}
                                activity={translatedData.activity}
                                weight={weight}
                            />
                        </>
                    )}
                </Layout>
            </StyledUserProfile>
        </ProtectedRoute>
    );
};
