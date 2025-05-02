import { ProtectedRoute } from '@/e_features/auth/components';
import { QuestionForm } from '@/e_features/survey/components/questions_form';
import { Layout } from '@/g_shared/ui/layout';
import { Container } from './style';

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
