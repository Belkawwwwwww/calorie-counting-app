import { LogoutBtn } from '@/e_features/auth/components';
import { RouteEnum } from '@/g_shared/model';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { FC } from 'react';
import { Props } from '../type';
import { NavigationWrapper } from './style';

export const NavigationLinks: FC<Props> = (props) => {
    if (!props.isAuth) {
        return <LinkButton to={RouteEnum.LOGIN}>Вход</LinkButton>;
    } else {
        return (
            <NavigationWrapper>
                {props.isOnNutritionDashboard ? (
                    <>
                        <LinkButton to={RouteEnum.HOME}>
                            Home
                        </LinkButton>{' '}
                        |
                    </>
                ) : (
                    <>
                        <LinkButton to={RouteEnum.MAIN}>
                            Power panel
                        </LinkButton>{' '}
                        |
                    </>
                )}
                <LinkButton to={RouteEnum.PROFILE}>Profile</LinkButton> |
                <LogoutBtn />
            </NavigationWrapper>
        );
    }
};
