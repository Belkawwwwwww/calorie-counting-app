import { FC } from 'react';
import { Layout } from '@/g - shared/ui/layout';
import { ProtectedRoute } from '@/c - pages/router-providers';
import { Main } from '@/d - widgets/main-page/ui/Main';

export const MainPage: FC = () => {
    return (
        <>
            <ProtectedRoute>
                <Layout>
                    <Main />
                </Layout>
            </ProtectedRoute>
        </>
    );
};
