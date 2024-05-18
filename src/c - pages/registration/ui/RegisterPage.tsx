import React from 'react';
import {Layout, UIFormLayout} from "@/g - shared/ui/layout";
import {RegisterForm} from "@/d - widgets/auth/register";

export const RegisterPage = () => {
    return (
        <Layout>
            <UIFormLayout title="Регистрация" form={<RegisterForm/>}/>
        </Layout>
    )

};
