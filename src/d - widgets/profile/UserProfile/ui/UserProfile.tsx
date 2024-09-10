import { useGetUserDataQuery } from '@/d - widgets/TestPage/api/surveyApi';
import { useFetchUserSessionQuery } from '@/g - shared/api/authApi';
import { RouteEnum } from '@/g - shared/model/navigation';
import { Button } from '@/g - shared/ui/Button';
import { Layout } from '@/g - shared/ui/layout';
import { LoadingIndicator } from '@/g - shared/ui/Loader/LoadingIndicator';
import Link from 'next/link';
import { useRouter } from 'next/router';
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

export const UserProfile = () => {
    const router = useRouter();
    const { data: userData, error, isLoading } = useGetUserDataQuery();
    const {
        data: userSessionData,
        isSuccess,
        isError,
    } = useFetchUserSessionQuery();
    if (isLoading || !userSessionData) {
        return <LoadingIndicator />;
    }
    if (!userData) {
        return <p>No user data available.</p>;
    }

    const { response_status, data } = userData;

    if (response_status !== 0) {
        console.log(userData);
        return (
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
        );
    }

    const { first_name, last_name } = userSessionData.data;

    return (
        <StyledUserProfile>
            <StyledMenu>
                <Layout>
                    <Link href={RouteEnum.MAIN}>Назад</Link>
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
                            <p>Gender: {userData.data.data.gender}</p>
                            <p>Target: {userData.data.data.target}</p>
                            <p>Age: {userData.data.data.age}</p>
                            <p>Growth: {userData.data.data.growth}</p>
                            <p>Activity: {userData.data.data.activity}</p>
                            <p>Weight: {userData.data.data.weight}</p>
                        </div>
                    ) : (
                        <p>No user data available.</p>
                    )}
                </StyledMain>
            </Layout>
        </StyledUserProfile>
    );
};
