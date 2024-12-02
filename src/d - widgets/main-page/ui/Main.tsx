import { FC } from 'react';
import { Calendar } from '../component/calendar';
import { SummaryBlock } from '../component/main-block';
import { NutritionBlock } from '../component/nutrition';
import { Button } from '@/g - shared/ui/button';
import { RouteEnum } from '@/g - shared/model';
import { useGetUserDataQuery } from '@/d - widgets/test-page/api/surveyApi';
import { LoaderTest, LoadingIndicator } from '@/g - shared/ui/loader';
import { Btn, Container, DateNow, Header, Message, Text } from './Styles';

export const Main: FC = () => {
    const { data: userData, isLoading } = useGetUserDataQuery();

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
                                <Button
                                    $variant='primary'
                                    $btnWidth='l'
                                    $btnSquareSize='button--square--size-l'
                                    type='submit'
                                >
                                    СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН
                                </Button>
                            </Btn>
                        </Message>
                    )}
                </Container>
            )}
        </>
    );
};
