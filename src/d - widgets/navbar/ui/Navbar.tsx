import { useAppSelector } from '@/g - shared/lib/store';
import styled from 'styled-components';
import { Logo } from '@/g - shared/ui/logo';
import { FC } from 'react';
import Link from 'next/link';
import { RouteEnum } from '@/g - shared/model';
import { useRouter } from 'next/router';
import { LogoutBtn } from '@/e - features/auth/components/logout-btn/Logout';

const Header = styled.header`
    position: relative;
    border-bottom: 1px solid #eaeff2;
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 88px;
    padding-left: 100px;
    padding-right: 100px;
`;

const LinksContainer = styled.div`
    display: flex;
`;

const StyledLinks = styled(Link)`
    color: black;
    text-decoration: none;
`;
export const Navbar: FC<{ hideOnPages?: string[] }> = ({
    hideOnPages = [],
}) => {
    const isAuth = useAppSelector((state) => state.session.is_authenticated);
    const router = useRouter();
    if (hideOnPages.includes(router.pathname)) {
        return null;
    }

    return (
        <Header>
            <Logo />
            <LinksContainer>
                {!isAuth ? (
                    <StyledLinks href={RouteEnum.LOGIN}>ВХОД</StyledLinks>
                ) : (
                    <>
                        <StyledLinks href={RouteEnum.PROFILE}>
                            ПРОФИЛЬ
                        </StyledLinks>
                        |<LogoutBtn />
                    </>
                )}
            </LinksContainer>
        </Header>
    );
};
