import { OpportunityCards } from '@/d_widgets/opportunity_cards';
import { RouteEnum } from '@/g_shared/model';
import { Layout } from '@/g_shared/ui/layout';
import { Btn, BtnWrapper, Container, Header, ResponsiveButton } from './style';

export const HomePage = () => {
	return (
		<Layout>
			<Container>
				<Header>Добро пожаловать в здоровую жизнь</Header>
				<OpportunityCards />
				<BtnWrapper>
					<Btn href={RouteEnum.TEST}>
						<ResponsiveButton $variant='secondary' type='submit'>
							СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН
						</ResponsiveButton>
					</Btn>
				</BtnWrapper>
			</Container>
		</Layout>
	);
};
