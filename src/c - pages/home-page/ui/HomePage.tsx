import Link from 'next/link';
import {RouteEnum} from '@/g - shared/model/navigation';
import {Layout} from '@/g - shared/ui/layout';
import styled from 'styled-components';

const StyledLFContainer = styled.div`
  margin-top: 60px;
    display: flex;
    flex-direction: column;
  /* justify-content: center; */
    position: relative;
  /* width: 450px; */
    height: 100vh;
`;

const StyledHeader = styled.h1`
  font-weight: 200;
  font-size: 30px;
  text-align: center;
`;
const StyledOpportunities = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--color-background1);
`;

const StyledCounter = styled.div`
  flex: 0 0 24%;
  text-align: center;
  padding-right: 15px;

  &:last-child {
    padding-right: 0;
  }
`;

const StyledH1 = styled.h1`
  font-size: 16px;
`;

const StyledText = styled.div``;

const StyledImg = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
`;
export const HomePage = () => {
    return (
        <Layout>
            <StyledLFContainer>
                <StyledHeader>Добро пожаловать в здоровую жизнь</StyledHeader>
                <StyledOpportunities>
                    {[
                        {
                            id: 1,
                            title: 'СЧЕТЧИК КАЛОРИЙ',
                            text: 'Воспользуйтесь самым быстрым и удобным счетчиком калорий. Позволяет отслеживать потребление калорий, белков, жиров и углеводов.',
                        },
                        {
                            id: 2,
                            title: 'РЕЦЕПТЫ',
                            text: 'Получите доступ к более чем 2500 рецептам. Возможность подбирать рецепты с учетом калорийности и макронутриентов.',
                        },
                        {
                            id: 3,
                            title: 'АНАЛИТИКА И РЕКОМЕНДАЦИИ',
                            text: 'Персональные рекомендации по рациону на основе данных пользователя. Возможность отслеживать динамику веса, энергии и самочувствия',
                        },
                        {
                            id: 4,
                            title: 'ПЕРСОНАЛИЗАЦИЯ',
                            text: 'Возможность настройки личных целей по калориям и макронутриентам. Ведение истории приемов пищи и отслеживание прогресса.',
                        },
                    ].map((item) => (
                        <StyledCounter key={item.id}>
                            <StyledImg>
                                <img src="" alt="Картинка"/>
                            </StyledImg>
                            <StyledH1>{item.title}</StyledH1>
                            <StyledText>{item.text}</StyledText>
                        </StyledCounter>
                    ))}
                </StyledOpportunities>

                <Link href={RouteEnum.LOGIN}>Вход</Link>
                <Link href={RouteEnum.REGISTRATION}>Регистрация</Link>
            </StyledLFContainer>
        </Layout>
    );
};
