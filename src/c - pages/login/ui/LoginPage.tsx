import {LoginForm} from '@/e - features/LoginForm';
import UIFormLayout from '@/g - shared/ui/layout/formLayot';

export const LoginPage = () => {
    return (
        <UIFormLayout title='Авторизация' form={<LoginForm/>}/>
    )
};
