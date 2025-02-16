import { FC } from 'react';
import { Layout } from '@/g_shared/ui/layout';
import { LoaderTest, LoadingIndicator } from '@/g_shared/ui/loader';
import { useGetUserSurvey } from '@/e_features/survey/hooks/useSurveyHooks';
import { Container, DateNow, Header } from './style';
import { RouteEnum } from '@/g_shared/model';
import { ProtectedRoute } from '@/e_features/auth';
import { Calendar } from '@/d_widgets/calendar';
import { PowerPanel } from '@/d_widgets/power_panel';
import { NutritionBlock } from '@/d_widgets/nutrition_block';
import { MessageNoResponse } from '@/g_shared/ui/message_no_response';

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
                                    <PowerPanel />
                                    <NutritionBlock />
                                </>
                            ) : (
                                <MessageNoResponse href={RouteEnum.TEST} />
                            )}
                        </Container>
                    )}
                </Layout>
            </ProtectedRoute>
        </>
    );
};
