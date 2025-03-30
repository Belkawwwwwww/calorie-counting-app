import { useAppSelector } from '@/g_shared/lib/store';
import { Logo } from '@/g_shared/ui/logo';
import { FC } from 'react';
import { RouteEnum } from '@/g_shared/model';
import { useRouter } from 'next/router';
import { Header, LinksContainer } from './style';
import { NavigationLinks } from '@/d_widgets/navigation_links';
import { isAuthSelector } from '@/e_features/auth/model/selector';

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
                <NavigationLinks
                    isAuth={isAuth}
                    isOnNutritionDashboard={isOnNutritionDashboard}
                />
            </LinksContainer>
        </Header>
    );
};
