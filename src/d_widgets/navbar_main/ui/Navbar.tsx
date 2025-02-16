import { useAppSelector } from '@/g_shared/lib/store';
import { Logo } from '@/g_shared/ui/logo';
import { FC } from 'react';
import { RouteEnum } from '@/g_shared/model';
import { useRouter } from 'next/router';
import { Header, LinksContainer, NavigationWrapper } from './style';
import { LinkButton } from '@/g_shared/ui/button';
import { isAuthSelector } from '@/e_features/auth';
import { LogoutBtn } from '../component';

export const Navbar: FC<{ hideOnPages?: string[] }> = ({
    hideOnPages = [],
}) => {
    const isAuth = useAppSelector(isAuthSelector);
    const router = useRouter();
    const isOnNutritionDashboard = router.pathname === RouteEnum.MAIN;

    if (hideOnPages.includes(router.pathname)) {
        return null;
    }

    return (
        <Header>
            <Logo />
            <LinksContainer>
                {!isAuth ? (
                    <LinkButton to={RouteEnum.LOGIN}>ВХОД</LinkButton>
                ) : (
                    <NavigationWrapper>
                        {isOnNutritionDashboard ? (
                            <>
                                <LinkButton to={RouteEnum.HOME}>
                                    ГЛАВНАЯ СТРАНИЦА
                                </LinkButton>
                                |
                            </>
                        ) : (
                            <>
                                <LinkButton to={RouteEnum.MAIN}>
                                    ПАНЕЛЬ ПИТАНИЯ
                                </LinkButton>
                                |
                            </>
                        )}
                        <LinkButton to={RouteEnum.PROFILE}>ПРОФИЛЬ</LinkButton>
                        |<LogoutBtn />
                    </NavigationWrapper>
                )}
            </LinksContainer>
        </Header>
    );
};
