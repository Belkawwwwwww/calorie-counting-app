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
    Main,
    Menu,
    NavigationWrapper,
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
import { useFetchUser } from '@/e_features/auth/hooks/authHooks';
import { useGetUserSurvey } from '@/e_features/survey/hooks/surveyHooks';
import { LogoutBtn } from '@/e_features/auth/components/logout_btn/Logout';
import { useAppSelector } from '@/g_shared/lib/store';
import { isPendingSelector } from '@/f_entities/redux/pending';
import { LinkButton } from '@/g_shared/ui/button';

export const UserProfile: FC = () => {
    const pending = useAppSelector(isPendingSelector);
    const { data: userSessionData } = useFetchUser();
    const {
        data: userData,
        isLoading,
        refetch: refetchUserData,
        isSuccess,
    } = useGetUserSurvey();
    console.log(isSuccess);
    console.log(pending);

    console.log('fetchuset', userSessionData);
    useEffect(() => {
        if (isSuccess && userSessionData) {
            // Вызываем рефетч данных пользователя когда сессия успешна
            refetchUserData();
        }
    }, [isSuccess, userSessionData]);

    if (isLoading && !userData && pending) {
        return <LoadingIndicator />;
    }
    if (!userData) {
        return <p>No user data available.</p>;
    }

    const { response_status } = userData;
    const first_name = userSessionData?.data?.first_name;
    const last_name = userSessionData?.data?.last_name;
    const { gender, target, growth, activity, weight } =
        userData.data?.data || {};
    const imageUrl = gender === 'FEMALE' ? '/icons_girl.png' : '/icons_boy.png';
    const renderProfileInfo = () => (
        <ProfileInfo>
            <Criteria>ПОЛ: {genderTranslations[gender] || gender}</Criteria>
            <Criteria>ЦЕЛЬ: {goalTranslations[target] || target}</Criteria>
            {/* <Criteria>ВОЗРАСТ: {age}</Criteria> */}
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
                        <NavigationWrapper>
                            <LinkButton to={RouteEnum.MAIN}>
                                ПАНЕЛЬ ПИТАНИЯ
                            </LinkButton>
                            |<LinkButton to={RouteEnum.HOME}>HOME</LinkButton>|
                            <LogoutBtn />
                        </NavigationWrapper>
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
