import { useAppSelector } from '@/g_shared/lib/store';
import { RouteEnum } from '@/g_shared/model';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';
import { isAuthSelector } from '../modele/selector/session';

type OpenRouteProps = {
    children: ReactNode;
};

export const OpenRoute: FC<OpenRouteProps> = (props) => {
    const router = useRouter();
    const isAuth = useAppSelector(isAuthSelector);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (isAuth) {
                router.push(RouteEnum.MAIN);
            }
        }
    }, [isAuth]);
    return !isAuth ? props.children : null;
};
