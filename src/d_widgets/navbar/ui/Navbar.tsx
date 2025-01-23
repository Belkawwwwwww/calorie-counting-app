import { useAppSelector } from '@/g_shared/lib/store';
import { Logo } from '@/g_shared/ui/logo';
import { FC } from 'react';
import { RouteEnum } from '@/g_shared/model';
import { useRouter } from 'next/router';
import { LogoutBtn } from '@/e_features/auth/components/logout_btn/Logout';
import {
    Header,
    LinksContainer,
    NavigationWrapper,
    StyledLinks,
} from '../style';

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
                    <NavigationWrapper>
                        <StyledLinks href={RouteEnum.PROFILE}>
                            ПРОФИЛЬ
                        </StyledLinks>
                        |<LogoutBtn />
                    </NavigationWrapper>
                )}
            </LinksContainer>
        </Header>
    );
};
