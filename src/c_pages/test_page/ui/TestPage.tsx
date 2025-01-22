import React from 'react';
import { ProtectedRoute } from '@/c_pages/router_providers';
import { Layout } from '@/g_shared/ui/layout';
import { Test } from '@/d_widgets/test_page';

export const TestPage = () => {
    return (
        <>
            <ProtectedRoute>
                <Layout>
                    <Test />
                </Layout>
            </ProtectedRoute>
        </>
    );
};
