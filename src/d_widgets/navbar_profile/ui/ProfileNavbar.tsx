import { LogoutBtn } from '@/d_widgets/navbar_main/component/LogoutBtn';
import { RouteEnum } from '@/g_shared/model';
import { Layout } from '@/g_shared/ui/layout';
import { Menu, NavigationWrapper, StyledLink } from './style';
import { LinkButton } from '@/g_shared/ui/linkButton';

export const ProfileNavbar = () => {
    return (
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
    );
};
