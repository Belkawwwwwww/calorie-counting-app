import { LoginForm } from '@/d - widgets/auth/login';
import { Layout, UIFormLayout } from '@/g - shared/ui/layout';

export const LoginPage = () => {
    return (
        <Layout>
            <UIFormLayout title='Авторизация' form={<LoginForm />} />
        </Layout>
    );
};
