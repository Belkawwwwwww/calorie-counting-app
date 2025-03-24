import { FC } from 'react';
import { Layout } from '@/g_shared/ui/layout';
import { LoaderTest, LoadingIndicator } from '@/g_shared/ui/loader';
import { Container } from './style';
import { ProtectedRoute } from '@/e_features/auth';
import { DashboardHeader } from '@/d_widgets/dashboard_header';
import { SurveyContent } from '@/d_widgets/dashboard_content';
import { useGetUserSurvey } from '@/e_features/survey';

export const NutritionDashboard: FC = () => {
    const { data: userData, isLoading } = useGetUserSurvey();
    if (isLoading) {
        return <LoadingIndicator />;
    }
    return (
        <>
            <ProtectedRoute>
                <Layout>
                    {isLoading ? (
                        <LoaderTest />
                    ) : (
                        <Container>
                            <DashboardHeader />
                            <SurveyContent
                                responseStatus={userData?.response_status}
                            />
                        </Container>
                    )}
                </Layout>
            </ProtectedRoute>
        </>
    );
};
