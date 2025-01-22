import { LoginForm } from '@/d_widgets/auth/login';
import { Layout, UIFormLayout } from '@/g_shared/ui/layout';

export const LoginPage = () => {
    return (
        <Layout>
            <UIFormLayout title='Авторизация' form={<LoginForm />} />
        </Layout>
    );
};
