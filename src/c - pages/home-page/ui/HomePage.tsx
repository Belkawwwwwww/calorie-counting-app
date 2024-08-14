import { RouteEnum } from '@/g - shared/model/navigation';
import { Button } from '@/g - shared/ui/Button';
import { Layout } from '@/g - shared/ui/layout';
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

interface StyledImgProps {
    src: string;
}

const StyledLFContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    position: relative;
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

const StyledImg = styled.div<StyledImgProps>`
    width: 100%;
    height: 100px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
`;
const StyledBtn = styled(Link)`
    margin: 0 auto;
    margin-top: 20px;
`

interface ImageProps {
    src: string;
}

const Image: FC<ImageProps> = ({ src }) => {
    return src ? <StyledImg src={src} /> : null;
};

const menu = [
    {
        id: 1,
        title: 'СЧЕТЧИК КАЛОРИЙ',
        text: 'Воспользуйтесь самым быстрым и удобным счетчиком калорий. Позволяет отслеживать потребление калорий, белков, жиров и углеводов.',
        imageUrl: '/CalorieCounter.png',
    },
    {
        id: 2,
        title: 'РЕЦЕПТЫ',
        text: 'Получите доступ к более чем 2500 рецептам. Возможность подбирать рецепты с учетом калорийности и макронутриентов.',
        imageUrl: '/recipes.png',
    },
    {
        id: 3,
        title: 'АНАЛИТИКА И РЕКОМЕНДАЦИИ',
        text: 'Персональные рекомендации по рациону на основе данных пользователя. Возможность отслеживать динамику веса, энергии и самочувствия',
        imageUrl: '/src/g - shared/ui/Image/CalorieCounter.png',
    },
    {
        id: 4,
        title: 'ПЕРСОНАЛИЗАЦИЯ',
        text: 'Возможность настройки личных целей по калориям и макронутриентам. Ведение истории приемов пищи и отслеживание прогресса.',
        imageUrl: '/Personalisation.png',
    },
];


export const HomePage = () => {
    return (
        <Layout>
            <StyledLFContainer>
                <StyledHeader>Добро пожаловать в здоровую жизнь</StyledHeader>
                <StyledOpportunities>
                    {menu.map((item) => (
                        <StyledCounter key={item.id}>
                            <Image src={item.imageUrl} />
                            <StyledH1>{item.title}</StyledH1>
                            <StyledText>{item.text}</StyledText>
                        </StyledCounter>
                    ))}
                </StyledOpportunities>
                <StyledBtn href={RouteEnum.TEST}>
                    <Button
                        $variant='primary'
                        $btnWidth='l'
                        $btnSquareSize='button--square--size-l'
                        type='submit'
                    >
                        СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН
                    </Button>
                </StyledBtn>
            </StyledLFContainer>
        </Layout>
    );
};
