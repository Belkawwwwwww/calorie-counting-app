import { FC } from 'react';
import { Layout } from '@/g_shared/ui/layout';
import { LoaderTest, LoadingIndicator } from '@/g_shared/ui/loader';
import { useGetUserSurvey } from '@/e_features/survey/hooks/useSurveyHooks';
import { Container, DateNow, Header } from './style';
import { Message } from '@/d_widgets/nutrition_dashboard/component/message_no_response/ui/Message';
import { RouteEnum } from '@/g_shared/model';
import {
    Calendar,
    NutritionBlock,
    SummaryBlock,
} from '@/d_widgets/nutrition_dashboard';
import { ProtectedRoute } from '@/e_features/auth';

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
                            <Header>
                                <DateNow>Сегодня</DateNow>
                                <Calendar />
                            </Header>
                            {userData?.response_status === 0 ? (
                                <>
                                    <SummaryBlock />
                                    <NutritionBlock />
                                </>
                            ) : (
                                <Message href={RouteEnum.TEST} />
                            )}
                        </Container>
                    )}
                </Layout>
            </ProtectedRoute>
        </>
    );
};
