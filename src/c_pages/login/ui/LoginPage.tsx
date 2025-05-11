import { LoginForm } from '@/d_widgets/auth';
import { isAuthSelector } from '@/e_features/auth/model/selector';
import { useAppSelector } from '@/g_shared/lib/store';
import { Layout, UIFormLayout } from '@/g_shared/ui/layout';
import { LoadingIndicator } from '@/g_shared/ui/loader';

export const LoginPage = () => {
    const isAuth = useAppSelector(isAuthSelector);
    return (
        <Layout>
            {isAuth ? (
                <LoadingIndicator />
            ) : (
                <UIFormLayout title="Авторизация" form={<LoginForm />} />
            )}        </Layout>
    );
};
