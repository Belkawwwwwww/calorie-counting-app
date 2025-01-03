import React from 'react';
import { ProtectedRoute } from '@/c - pages/router-providers';
import { Layout } from '@/g - shared/ui/layout';
import { Test } from '@/d - widgets/test-page';

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
