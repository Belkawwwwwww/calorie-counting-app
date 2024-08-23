import { useGetUserDataQuery } from '@/d - widgets/TestPage/api/surveyApi';
import { useFetchUserSessionQuery } from '@/g - shared/api/authApi';
import { RouteEnum } from '@/g - shared/model/navigation';
import { Button } from '@/g - shared/ui/Button';
import { LoadingIndicator } from '@/g - shared/ui/Loader/LoadingIndicator';
import Link from 'next/link';
import styled from 'styled-components';

const StyledUserProfile = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 300px;
    background-color: var(--color-background1);
    border-radius: 8px;
    color: white;
    display: flex;
    /* justify-content: center; */
    /* padding: 100px 30px 30px 30px; */
`;
const StyledAboutProfile = styled.div`
    /* padding: 100px 30px 30px 30px; */
`;
const StyledUsername = styled.div`
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

export const UserProfile = () => {
    const { data: userData, error, isLoading } = useGetUserDataQuery();
    const { data: userSessionData, isSuccess, isError } = useFetchUserSessionQuery();

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

    console.log('UserData:', userData);
    const { first_name, last_name } = userSessionData.data;

    return (
        <StyledUserProfile>
            <StyledAboutProfile>
                <>фото</>
                <StyledUsername>{first_name} {last_name}</StyledUsername>
            </StyledAboutProfile>
            <StyledMain>
                {userData ? (
                    <div>
                        <p>Gender:  {userData.data.data.gender}</p>
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
        </StyledUserProfile>
    );
};
