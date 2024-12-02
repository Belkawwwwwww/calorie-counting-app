import { useAppSelector } from '@/g - shared/lib/store';
import { Logo } from '@/g - shared/ui/logo';
import { FC } from 'react';
import { RouteEnum } from '@/g - shared/model';
import { useRouter } from 'next/router';
import { LogoutBtn } from '@/e - features/auth/components/logout-btn/Logout';
import { Header, LinksContainer, StyledLinks } from '../style/Styles';

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
