import { FC } from 'react';
import { Calendar } from '../component/calendar';
import { SummaryBlock } from '../component/main_block';
import { NutritionBlock } from '../component/nutrition';
import { RouteEnum } from '@/g_shared/model';
import { LoaderTest, LoadingIndicator } from '@/g_shared/ui/loader';
import {
    Btn,
    Container,
    DateNow,
    Header,
    Message,
    ResponsiveButton,
    Text,
} from '../style';
import { useGetUserSurvey } from '@/e_features/survey/hooks/surveyHooks';

export const Main: FC = () => {
    const { data: userData, isLoading } = useGetUserSurvey();
    console.log('отработал');
    if (isLoading) {
        return <LoadingIndicator />;
    }
    return (
        <>
            {isLoading ? (
                <LoaderTest />
            ) : (
                <Container>
                    <Header>
                        <DateNow>Сегодня</DateNow>
                        <Calendar />
                    </Header>
                    {userData?.response_status === 0 ? (
                        <>
                            <SummaryBlock />
                            <NutritionBlock />
                        </>
                    ) : (
                        <Message>
                            <Text>
                                Пока что тут ничего нет, но мы можем это
                                исправить
                            </Text>
                            <Btn href={RouteEnum.TEST}>
                                <ResponsiveButton
                                    $variant='primary'
                                    $btnWidth='l'
                                    $btnSquareSize='button--square--size-l'
                                    type='submit'
                                >
                                    СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН
                                </ResponsiveButton>
                            </Btn>
                        </Message>
                    )}
                </Container>
            )}
        </>
    );
};
