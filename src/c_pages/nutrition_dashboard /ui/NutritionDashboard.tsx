import { DashboardHeader } from '@/d_widgets/dashboard_header';
import { SurveyContent } from '@/d_widgets/survey_content';
import { ProtectedRoute } from '@/e_features/auth/ui';
import { useGetUserSurvey } from '@/e_features/survey/hooks';
import { Layout } from '@/g_shared/ui/layout';
import { LoaderTest, LoadingIndicator } from '@/g_shared/ui/loader';
import { FC } from 'react';
import { Container } from './style';

export const NutritionDashboard: FC = () => {
	const { data: userData, isLoading } = useGetUserSurvey();
	if (isLoading) {
		return <LoadingIndicator />;
	}
	return (
		<>
			<ProtectedRoute>
				<Layout>
					{isLoading ? (
						<LoaderTest />
					) : (
						<Container>
							<DashboardHeader />
							<SurveyContent responseStatus={userData?.response_status} />
						</Container>
					)}
				</Layout>
			</ProtectedRoute>
		</>
	);
};
