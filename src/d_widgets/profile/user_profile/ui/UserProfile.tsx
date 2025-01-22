import { useGetUserDataQuery } from '@/d_widgets/test_page/api/surveyApi';
import { useFetchUserSessionQuery } from '@/g_shared/api/authApi';
import { RouteEnum } from '@/g_shared/model';
import { Layout } from '@/g_shared/ui/layout';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import {
    activityTranslations,
    genderTranslations,
    goalTranslations,
} from '@/g_shared/utils/translation';
import { FC, useEffect } from 'react';
import {
    AboutProfile,
    Block,
    Btn,
    BtnContainer,
    BtnTest,
    ContainerProfile,
    CreatePlanButton,
    Criteria,
    Links,
    Main,
    Menu,
    Photo,
    PhotoContainer,
    PhotoWrapper,
    ProfileInfo,
    ResponsiveButton,
    StyledLink,
    StyledUserProfile,
    Username,
} from '../style';
import { BodyMeasurements } from '../../component/body_zamer/ui/BodyMeasurements';

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
        <ProfileInfo>
            <Criteria>ПОЛ: {genderTranslations[gender] || gender}</Criteria>
            <Criteria>ЦЕЛЬ: {goalTranslations[target] || target}</Criteria>
            <Criteria>ВОЗРАСТ: {age}</Criteria>
            <Criteria>РОСТ: {growth}</Criteria>
            <Criteria>
                ОБРАЗ ЖИЗНИ: {activityTranslations[activity] || activity}
            </Criteria>
            <Criteria>ВЕС: {weight}</Criteria>
        </ProfileInfo>
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
                    <BodyMeasurements />
                </BtnContainer>
                <ContainerProfile>
                    <AboutProfile>
                        <Username>
                            {first_name} {last_name}
                        </Username>
                    </AboutProfile>
                </ContainerProfile>
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
