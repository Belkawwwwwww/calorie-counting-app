import React from 'react';
import { Layout } from '@/g_shared/ui/layout';
import { ProtectedRoute } from '@/e_features/auth';
import { Container, Title } from './style';
import { LoaderTest } from '@/g_shared/ui/loader';
import { useCreateSurveyHandler, useSurvey } from '@/e_features/survey';
import { CreateQuestions } from '@/d_widgets/test/ui';

export const TestPage = () => {
    const { answers } = useSurvey();
    const { loading } = useCreateSurveyHandler(answers);

    return (
        <>
            <ProtectedRoute>
                <Layout>
                    <Container>
                        {loading ? (
                            <LoaderTest />
                        ) : (
                            <>
                                <Title>СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН</Title>
                                <CreateQuestions />
                            </>
                        )}
                    </Container>
                </Layout>
            </ProtectedRoute>
        </>
    );
};
