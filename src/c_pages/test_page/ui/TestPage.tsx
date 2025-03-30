import React from 'react';
import { Layout } from '@/g_shared/ui/layout';
import { Container } from './style';
import { ProtectedRoute } from '@/e_features/auth/ui';
import { QuestionForm } from '@/e_features/survey/components/questions_form';

export const TestPage = () => {
    return (
        <ProtectedRoute>
            <Layout>
                <Container>
                    <QuestionForm />
                </Container>
            </Layout>
        </ProtectedRoute>
    );
};
