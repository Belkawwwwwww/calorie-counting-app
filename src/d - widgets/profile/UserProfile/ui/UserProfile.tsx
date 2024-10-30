import { useGetUserDataQuery } from '@/d - widgets/TestPage/api/surveyApi';
import { useFetchUserSessionQuery } from '@/g - shared/api/authApi';
import { RouteEnum } from '@/g - shared/model/navigation';
import { Button } from '@/g - shared/ui/Button';
import { Layout } from '@/g - shared/ui/layout';
import { LoadingIndicator } from '@/g - shared/ui/Loader/LoadingIndicator';
import {
    activityTranslations,
    genderTranslations,
    goalTranslations,
} from '@/g - shared/utils/translation';
import Link from 'next/link';
import { useEffect } from 'react';
import styled from 'styled-components';

const StyledUserProfile = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
const StyledMenu = styled.div`
    background: linear-gradient(
        109.6deg,
        rgb(231, 230, 214) 11.2%,
        rgb(206, 240, 185) 47.5%,
        rgb(100, 163, 111) 100.2%
    );
    border-radius: 0 0 29px 29px;
    width: 100%;
    height: 270px;
`;
const StyledLink = styled.div`
    display: flex;
    padding-top: 30px;
    justify-content: space-between;
`;
const StyledPhotoContainer = styled.div`
    position: absolute;
    top: 169px;
    left: 86px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledPhoto = styled.div`
    width: 200px;
    height: 200px;
    background: black;
    border-radius: 50%;
`;
const StyledBtnContainer = styled.div`
    display: flex;
    float: right;
`;

const StyledAboutProfile = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 130px;
`;
const StyledUsername = styled.div`
    text-transform: uppercase;
    font-weight: 200;
    font-size: 30px;
`;
const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledBtn = styled(Link)`
    margin: 0 auto;
    margin-top: 20px;
`;
const StyledBtnTest = styled(Link)`
    position: relative;
    top: 10px;
    right: -30px;
`;
const StyledLinks = styled(Link)`
    color: black;
    text-decoration: none;
`;
const StyledBlock = styled.div`
    display: flex;
    margin-top: 300px;
    align-items: center;
    justify-content: center;
`;

export const UserProfile = () => {
    const {
        data: userData,
        isLoading,
        refetch: refetchUserData,
    } = useGetUserDataQuery();
    const { data: userSessionData, isSuccess } = useFetchUserSessionQuery();

    useEffect(() => {
        if (isSuccess && userSessionData) {
            // Вызываем рефетч данных пользователя когда сессия успешна
            refetchUserData();
        }
    }, [isSuccess, userSessionData]);

    if (isLoading) {
        return <LoadingIndicator />;
    }
    if (!userData) {
        return <p>No user data available.</p>;
    }

    const { response_status } = userData;

    if (response_status !== 0) {
        console.log(userData);
        return (
            <StyledBlock>
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
            </StyledBlock>
        );
    }

    const first_name = userSessionData?.data?.first_name;
    const last_name = userSessionData?.data?.last_name;

    return (
        <StyledUserProfile>
            <StyledMenu>
                <Layout>
                    <StyledLink>
                        <StyledLinks href={RouteEnum.MAIN}>
                            КАЛЬКУЛЯТОР
                        </StyledLinks>
                        <StyledLinks href={RouteEnum.HOME}>HOME</StyledLinks>
                    </StyledLink>
                </Layout>
            </StyledMenu>
            <Layout>
                <StyledPhotoContainer>
                    <StyledPhoto></StyledPhoto>
                </StyledPhotoContainer>
                <StyledBtnContainer>
                    <StyledBtnTest href={RouteEnum.TEST}>
                        <Button
                            $variant='secondary'
                            $btnWidth='m'
                            $btnSquareSize='button--square--size-m'
                            type='submit'
                        >
                            ОБНОВИТЬ ДАННЫЕ
                        </Button>
                    </StyledBtnTest>
                </StyledBtnContainer>
                <StyledAboutProfile>
                    <StyledUsername>
                        {first_name} {last_name}
                    </StyledUsername>
                </StyledAboutProfile>
                <StyledMain>
                    {userData ? (
                        <div>
                            <p>
                                ПОЛ: 
                                {genderTranslations[
                                    userData.data.data.gender
                                ] || userData.data.data.gender}
                            </p>
                            <p>
                                ЦЕЛЬ: 
                                {goalTranslations[userData.data.data.target] ||
                                    userData.data.data.target}
                            </p>
                            <p>ВОЗРАСТ: {userData.data.data.age}</p>
                            <p>РОСТ: {userData.data.data.growth}</p>
                            <p>
                                ОБРАЗ ЖИЗНИ: 
                                 {activityTranslations[
                                    userData.data.data.activity
                                ] || userData.data.data.activity}
                            </p>
                            <p>ВЕС: {userData.data.data.weight}</p>
                        </div>
                    ) : (
                        <p>No user data available.</p>
                    )}
                </StyledMain>
            </Layout>
        </StyledUserProfile>
    );
};
