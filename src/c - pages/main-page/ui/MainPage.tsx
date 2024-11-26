import React, { FC } from 'react';
import styled from 'styled-components';
import { Layout } from '@/g - shared/ui/layout';
import { Calendar } from '@/d - widgets/MainPage/Calendar';
import { SummaryBlock } from '@/d - widgets/MainPage/MainBlock/ui/SummaryBlock';
import { ProtectedRoute } from '@/c - pages/router-providers';
import { useGetUserDataQuery } from '@/d - widgets/TestPage/api/surveyApi';
import { Button } from '@/g - shared/ui/Button';
import { LoadingIndicator } from '@/g - shared/ui/Loader';
import { NutritionBlock } from '@/d - widgets/MainPage/Nutrition';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
`;
const StyledDateNow = styled.div`
    font-size: 20px;
`;
const StyledMessage = styled.div`
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Text = styled.div`
    font-size: 25px;
    padding-bottom: 50px;
`;

export const MainPage: FC = () => {
    const { data: userData, isLoading } = useGetUserDataQuery();
    if (isLoading) {
        return <LoadingIndicator />;
    }
    return (
        <ProtectedRoute>
            <Layout>
                <StyledHeader>
                    <StyledDateNow>Сегодня</StyledDateNow>
                    <Calendar />
                </StyledHeader>
                {userData?.response_status === 0 ? (
                    <>
                        <SummaryBlock />
                        <NutritionBlock />
                    </>
                ) : (
                    <StyledMessage>
                        <Text>
                            Пока что тут ничего нет, но мы можем это исправить
                        </Text>

                        <Button
                            $variant='primary'
                            $btnWidth='l'
                            $btnSquareSize='button--square--size-l'
                            type='submit'
                        >
                            СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН
                        </Button>
                    </StyledMessage>
                )}
            </Layout>
        </ProtectedRoute>
    );
};
