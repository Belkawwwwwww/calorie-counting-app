import React from 'react';
import UIFormLayout from "@/g - shared/ui/layout/formLayot";
import {RegisterForm} from "@/e - features/Registration";

export const RegisterPage = () => {
    return (
        <UIFormLayout title="Регистрация" form={<RegisterForm/>}/>
    );
};
