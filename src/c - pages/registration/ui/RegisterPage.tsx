import React from 'react';
import {RegisterForm} from '@/e - features/Registration';
import {Layout, UIFormLayout} from "@/g - shared/ui/layout";

export const RegisterPage = () => {
    return (
        <Layout>
            <UIFormLayout title="Регистрация" form={<RegisterForm/>}/>
        </Layout>
    )

};
