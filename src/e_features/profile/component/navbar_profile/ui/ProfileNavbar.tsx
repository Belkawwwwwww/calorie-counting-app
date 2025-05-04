import { LogoutBtn } from '@/e_features/auth/components';
import { RouteEnum } from '@/g_shared/model';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { Menu, NavigationWrapper, StyledLink } from './style';

export const ProfileNavbar = () => {
    return (
        <Menu>
            <>
                <StyledLink>
                    <NavigationWrapper>
                        <LinkButton to={RouteEnum.MAIN}>
                            Power panel
                        </LinkButton>
                        |<LinkButton to={RouteEnum.HOME}>Home</LinkButton>|
                        <LogoutBtn />
                    </NavigationWrapper>
                </StyledLink>
            </>
        </Menu>
    );
};
