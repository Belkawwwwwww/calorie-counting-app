import Link from 'next/link';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { Calendar } from '../component/calendar';
import { SummaryBlock } from '../component/main-block';
import { NutritionBlock } from '../component/nutrition';
import { Button } from '@/g - shared/ui/button';
import { RouteEnum } from '@/g - shared/model';
import { useGetUserDataQuery } from '@/d - widgets/test-page/api/surveyApi';
import { LoaderTest, LoadingIndicator } from '@/g - shared/ui/loader';

const Container = styled.div`
    /* display: flex; */
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
`;
const DateNow = styled.div`
    font-size: 20px;
`;
const Message = styled.div`
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Text = styled.div`
    font-size: 25px;
    padding-bottom: 50px;
`;
const Btn = styled(Link)`
    margin: 0 auto;
    margin-top: 20px;
`;

export const Main: FC = () => {
    const { data: userData, isLoading } = useGetUserDataQuery();

    if (isLoading) {
        return <LoadingIndicator />;
    }
    return (
        <Container>
            {isLoading ? (
                <LoaderTest />
            ) : (
                <>
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
                </>
            )}
        </Container>
    );
};
