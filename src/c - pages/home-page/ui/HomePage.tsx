import Link from 'next/link';
import { RouteEnum } from '@/g - shared/model/navigation';
import { Button } from '@/g - shared/ui/Button';
import { Layout } from '@/g - shared/ui/layout';
import styled from 'styled-components';

const StyledLFContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 450px;
    height: 100vh;
`;
export const HomePage = () => {
    return (
        <Layout>
            <StyledLFContainer>
                <Button
                    $btnWidth="l"
                    $variant="primary"
                    $btnSquareSize="button--square--size-m"
                    onClick={() => console.log('Clicked!')}
                >
                    Create My Plane
                </Button>
                <Link href={RouteEnum.LOGIN}>Авторизоваться</Link>
                <Link href={RouteEnum.REGISTRATION}>Регистрация</Link>
            </StyledLFContainer>
        </Layout>
    );
};
