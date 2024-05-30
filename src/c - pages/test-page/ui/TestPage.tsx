import React from 'react';
import {Test} from '@/d - widgets/TestPage/ui/TestPage';
import AuthLayout from '@/c - pages/isAuth';

export const TestPage = () => {
    return (
        <>
            <AuthLayout>
                {/* <Layout> */}
                <Test/>
                {/* </Layout> */}
            </AuthLayout>
        </>
    );
};
