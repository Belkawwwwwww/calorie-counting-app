import { FC } from 'react';
import { Layout } from '@/g_shared/ui/layout';
import { ProtectedRoute } from '@/c_pages/router_providers';
import { Main } from '@/d_widgets/main_page/ui/Main';

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
