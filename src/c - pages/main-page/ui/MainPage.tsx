import React, { FC } from 'react';
import styled from 'styled-components';
import { Layout } from '@/g - shared/ui/layout';
import { Calendar } from '@/d - widgets/main-page/calendar';
import { ProtectedRoute } from '@/c - pages/router-providers';
import { Button } from '@/g - shared/ui/button';
import { LoadingIndicator } from '@/g - shared/ui/loader';
import { NutritionBlock } from '@/d - widgets/main-page/nutrition';
import Link from 'next/link';
import { RouteEnum } from '@/g - shared/model';
import { SummaryBlock } from '@/d - widgets/main-page/main-block';
import { useGetUserDataQuery } from '@/d - widgets/test-page/api/surveyApi';

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

export const MainPage: FC = () => {
    const { data: userData, isLoading } = useGetUserDataQuery();
    if (isLoading) {
        return <LoadingIndicator />;
    }
    return (
        <ProtectedRoute>
            <Layout>
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
                            Пока что тут ничего нет, но мы можем это исправить
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
            </Layout>
        </ProtectedRoute>
    );
};
