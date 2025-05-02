import { LogoutBtn } from '@/e_features/auth/components';
import { RouteEnum } from '@/g_shared/model';
import { Layout } from '@/g_shared/ui/layout';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { Menu, NavigationWrapper, StyledLink } from './style';

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
