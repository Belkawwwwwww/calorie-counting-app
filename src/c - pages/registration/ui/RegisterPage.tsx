import React from 'react';
import {RegisterForm} from '@/d - widgets/auth/register';
import {Layout, UIFormLayout} from "@/g - shared/ui/layout";

export const RegisterPage = () => {
    return (
        <Layout>
            <UIFormLayout title="Регистрация" form={<RegisterForm/>}/>
        </Layout>
    )

};
