import { useGetUserDataQuery } from '@/d - widgets/test-page/api/surveyApi';
import { useFetchUserSessionQuery } from '@/g - shared/api/authApi';
import { RouteEnum } from '@/g - shared/model';
import { Button } from '@/g - shared/ui/button';
import { Layout } from '@/g - shared/ui/layout';
import { LoadingIndicator } from '@/g - shared/ui/loader';
import {
    activityTranslations,
    genderTranslations,
    goalTranslations,
} from '@/g - shared/utils/translation';
import Link from 'next/link';
import { FC, useEffect } from 'react';
import styled from 'styled-components';

const StyledUserProfile = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;
const Menu = styled.div`
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
const PhotoContainer = styled.div`
    position: absolute;
    top: 169px;
    left: 86px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const PhotoWrapper = styled.div`
    width: 170px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(
            circle at left top,
            rgba(0, 255, 0, 1),
            rgba(0, 255, 0, 0) 60%
        ),
        radial-gradient(
            circle at right top,
            rgba(255, 0, 255, 1),
            rgba(255, 0, 255, 0) 30%
        ),
        radial-gradient(
            circle at left bottom,
            rgba(255, 192, 0, 1),
            rgba(255, 192, 0, 0) 70%
        ),
        radial-gradient(
            circle at right bottom,
            rgba(255, 0, 127, 1),
            rgba(255, 0, 127, 0) 30%
        ),
        radial-gradient(
            circle at left center,
            rgba(0, 255, 0, 0.5),
            rgba(255, 0, 255, 0.2) 50%
        ),
        radial-gradient(
            circle at right center,
            rgba(255, 192, 0, 0.5),
            rgba(255, 0, 127, 0.2) 50%
        );
    border-radius: 50%;
    border: solid 4px white;
`;
const Photo = styled.div<{ src: string }>`
    width: 100px;
    height: 100px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
`;

const BtnContainer = styled.div`
    display: flex;
    float: right;
`;

const AboutProfile = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 130px;
`;
const Username = styled.div`
    text-transform: uppercase;
    font-weight: 200;
    font-size: 30px;
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
`;
const Btn = styled(Link)`
    margin: 0 auto;
    margin-top: 20px;
`;
const BtnTest = styled(Link)`
    position: relative;
    top: 10px;
    right: -30px;
`;
const Links = styled(Link)`
    color: black;
    text-decoration: none;
`;
const Block = styled.div`
    display: flex;
    margin-top: 300px;
    align-items: center;
    justify-content: center;
`;

export const UserProfile: FC = () => {
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
    const first_name = userSessionData?.data?.first_name;
    const last_name = userSessionData?.data?.last_name;
    const { gender, target, age, growth, activity, weight } =
        userData.data?.data || {};
    const imageUrl = gender === 'FEMALE' ? '/icons_girl.png' : '/icons_boy.png';
    const renderProfileInfo = () => (
        <div>
            <p>ПОЛ: {genderTranslations[gender] || gender}</p>
            <p>ЦЕЛЬ: {goalTranslations[target] || target}</p>
            <p>ВОЗРАСТ: {age}</p>
            <p>РОСТ: {growth}</p>
            <p>ОБРАЗ ЖИЗНИ: {activityTranslations[activity] || activity}</p>
            <p>ВЕС: {weight}</p>
        </div>
    );

    if (response_status !== 0) {
        console.log(userData);
        return (
            <Block>
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
            </Block>
        );
    }

    return (
        <StyledUserProfile>
            <Menu>
                <Layout>
                    <StyledLink>
                        <Links href={RouteEnum.MAIN}>
                            КАЛЬКУЛЯТОР
                        </Links>
                        <Links href={RouteEnum.HOME}>HOME</Links>
                    </StyledLink>
                </Layout>
            </Menu>
            <Layout>
                <PhotoContainer>
                    <PhotoWrapper>
                        <Photo src={imageUrl}></Photo>
                    </PhotoWrapper>
                </PhotoContainer>
                <BtnContainer>
                    <BtnTest href={RouteEnum.TEST}>
                        <Button
                            $variant='secondary'
                            $btnWidth='m'
                            $btnSquareSize='button--square--size-m'
                            type='submit'
                        >
                            ОБНОВИТЬ ДАННЫЕ
                        </Button>
                    </BtnTest>
                </BtnContainer>
                <AboutProfile>
                    <Username>
                        {first_name} {last_name}
                    </Username>
                </AboutProfile>
                <Main>
                    {userData ? (
                        renderProfileInfo()
                    ) : (
                        <p>No user data available.</p>
                    )}
                </Main>
            </Layout>
        </StyledUserProfile>
    );
};
