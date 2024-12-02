import { useGetUserDataQuery } from '@/d - widgets/test-page/api/surveyApi';
import { useFetchUserSessionQuery } from '@/g - shared/api/authApi';
import { RouteEnum } from '@/g - shared/model';
import { Layout } from '@/g - shared/ui/layout';
import { LoadingIndicator } from '@/g - shared/ui/loader';
import {
    activityTranslations,
    genderTranslations,
    goalTranslations,
} from '@/g - shared/utils/translation';
import { FC, useEffect } from 'react';
import {
    AboutProfile,
    Block,
    Btn,
    BtnContainer,
    BtnTest,
    CreatePlanButton,
    Links,
    Main,
    Menu,
    Photo,
    PhotoContainer,
    PhotoWrapper,
    ResponsiveButton,
    StyledLink,
    StyledUserProfile,
    Username,
} from '../style/Style';

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
                    <CreatePlanButton $variant='primary' type='submit'>
                        СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН
                    </CreatePlanButton>
                </Btn>
            </Block>
        );
    }

    return (
        <StyledUserProfile>
            <Menu>
                <Layout>
                    <StyledLink>
                        <Links href={RouteEnum.MAIN}>КАЛЬКУЛЯТОР</Links>
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
                        <ResponsiveButton
                            $variant='secondary'
                            $btnWidth='m'
                            $btnSquareSize='button--square--size-m'
                            type='submit'
                        >
                            ОБНОВИТЬ ДАННЫЕ
                        </ResponsiveButton>
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
