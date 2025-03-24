import { FC } from 'react';
import { Props } from '../type';
import { RouteEnum } from '@/g_shared/model';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { NavigationWrapper } from './style';
import { LogoutBtn } from '@/d_widgets/navbar_main/component';

export const NavigationLinks: FC<Props> = (props) => {
    if (!props.isAuth) {
        return <LinkButton to={RouteEnum.LOGIN}>ВХОД</LinkButton>;
    } else {
        return (
            <NavigationWrapper>
                {props.isOnNutritionDashboard ? (
                    <>
                        <LinkButton to={RouteEnum.HOME}>
                            ГЛАВНАЯ СТРАНИЦА
                        </LinkButton>{' '}
                        |
                    </>
                ) : (
                    <>
                        <LinkButton to={RouteEnum.MAIN}>
                            ПАНЕЛЬ ПИТАНИЯ
                        </LinkButton>{' '}
                        |
                    </>
                )}
                <LinkButton to={RouteEnum.PROFILE}>ПРОФИЛЬ</LinkButton> |
                <LogoutBtn />
            </NavigationWrapper>
        );
    }
};
