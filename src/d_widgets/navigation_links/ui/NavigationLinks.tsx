import { LogoutBtn } from '@/e_features/auth/components';
import { RouteEnum } from '@/g_shared/model';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { FC } from 'react';
import { Props } from '../type';
import { NavigationWrapper } from './style';
import { useRouter } from 'next/router';

export const NavigationLinks: FC<Props> = (props) => {
    const router = useRouter();
    const isOnProfilePage = router.pathname === RouteEnum.PROFILE;
    if (!props.isAuth) {
        return <LinkButton to={RouteEnum.LOGIN}>Вход</LinkButton>;
    } else {
        return (
            <NavigationWrapper>
                {(() => { //IIFE для условного рендеринга
                    if (router.pathname === RouteEnum.MAIN) {
                        return (
                            <>
                                <LinkButton to={RouteEnum.HOME}>Home</LinkButton>
                                {' | '}
                            </>
                        );
                    } else if (router.pathname === RouteEnum.HOME) {
                        return (
                            <>
                                <LinkButton to={RouteEnum.MAIN}>Power panel</LinkButton>
                                {' | '}
                            </>
                        );
                    } else if (isOnProfilePage) {
                        return (
                            <>
                                <LinkButton to={RouteEnum.MAIN}>Power panel</LinkButton>
                                {' | '}
                                <LinkButton to={RouteEnum.HOME}>Home</LinkButton>
                                {' | '}
                            </>
                        );
                    }
                    return null;
                })()}
                {!isOnProfilePage ? ( 
                    <>
                        <LinkButton to={RouteEnum.PROFILE}>Profile</LinkButton>
                        {' | '}
                    </>
                ): null}
                <LogoutBtn />
            </NavigationWrapper>
        );
    }
};