import React from 'react';
import { Layout } from '@/g_shared/ui/layout';
import { ProtectedRoute } from '@/e_features/auth';
import { Container } from './style';
import { QuestionForm } from '@/d_widgets/questions_form';

export const TestPage = () => {
    return (
        <>
            <ProtectedRoute>
                <Layout>
                    <Container>
                        <QuestionForm />
                    </Container>
                </Layout>
            </ProtectedRoute>
        </>
    );
};
