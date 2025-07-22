import { NavigationLinks } from '@/d_widgets/navigation_links';
import { isAuthSelector } from '@/e_features/auth/model/selector';
import { useAppSelector } from '@/g_shared/lib/store';
import { Logo } from '@/g_shared/ui/logo';
import { FC } from 'react';
import { Header, LinksContainer } from './style';

export const Navbar: FC = () => {
    const isAuth = useAppSelector(isAuthSelector);

    return (
        <Header>
            <Logo />
            <LinksContainer>
                <NavigationLinks
                    isAuth={isAuth}
                />
            </LinksContainer>
        </Header>
    );
};
