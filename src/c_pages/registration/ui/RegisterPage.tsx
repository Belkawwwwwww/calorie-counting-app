import { RegisterForm } from '@/d_widgets/auth';
import { Layout, UIFormLayout } from '@/g_shared/ui/layout';

export const RegisterPage = () => {
	return (
		<Layout>
			<UIFormLayout title='Регистрация' form={<RegisterForm />} />
		</Layout>
	);
};
