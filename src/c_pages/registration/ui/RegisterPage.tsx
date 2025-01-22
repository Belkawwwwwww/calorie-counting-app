import React from 'react';
import { Layout, UIFormLayout } from '@/g_shared/ui/layout';
import { RegisterForm } from '@/d_widgets/auth/register';

export const RegisterPage = () => {
    return (
        <Layout>
            <UIFormLayout title='Регистрация' form={<RegisterForm />} />
        </Layout>
    );
};
