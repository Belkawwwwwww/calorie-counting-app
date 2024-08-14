import React from 'react';

import { ProtectedRoute } from '@/c - pages/router-providers';
import { Layout, UIFormLayout } from '@/g - shared/ui/layout';
import { Test } from '@/d - widgets/TestPage';

export const TestPage = () => {
    return (
        <>
            <ProtectedRoute>
                <Layout>
                    {/* <UIFormLayout
                        title='Создать свой персональный план'
                        form={<Test />}
                    /> */}
                    <Test/>
                </Layout>
            </ProtectedRoute>
        </>
    );
};
