import { DashboardHeader } from '@/d_widgets/dashboard_header';
import { SurveyContent } from '@/d_widgets/survey_content';
import { ProtectedRoute } from '@/e_features/auth/components';
import { useGetUserSurvey } from '@/e_features/survey/hooks';
import { MealDataProvider } from '@/g_shared/lib/context';
import { Layout } from '@/g_shared/ui/layout';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import { FC } from 'react';
import { Container } from './style';

export const NutritionDashboard: FC = () => {
	const { data: userData, isLoading } = useGetUserSurvey();
	return (
		<>
				<ProtectedRoute>
					<MealDataProvider>
						<Layout>
							{isLoading ? (
								<LoadingIndicator />
							) : (
								<Container>
									<DashboardHeader />
									<SurveyContent responseStatus={userData?.response_status} />
								</Container>
							)}
						</Layout>
					</MealDataProvider>
				</ProtectedRoute >
		</>
	);
};
