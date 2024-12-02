import { RouteEnum } from '@/g - shared/model';
import { FC } from 'react';
import {
    Btn,
    BtnWrapper,
    Container,
    Counter,
    H1,
    Header,
    Img,
    Opportunities,
    ResponsiveButton,
    Text,
} from './Styles';

type ImageProps = {
    src: string;
};

const Image: FC<ImageProps> = (props) => {
    return props.src ? <Img src={props.src} /> : null;
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
export const Home: FC = () => {
    return (
        <>
            <Container>
                <Header>Добро пожаловать в здоровую жизнь</Header>
                <Opportunities>
                    {menu.map((item) => (
                        <Counter key={item.id}>
                            <Image src={item.imageUrl} />
                            <H1>{item.title}</H1>
                            <Text>{item.text}</Text>
                        </Counter>
                    ))}
                </Opportunities>
                <BtnWrapper>
                    <Btn href={RouteEnum.TEST}>
                        <ResponsiveButton $variant='secondary' type='submit'>
                            СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН
                        </ResponsiveButton>
                    </Btn>
                </BtnWrapper>
            </Container>
        </>
    );
};
