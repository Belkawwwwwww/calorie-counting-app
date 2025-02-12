import { useAppSelector } from '@/g_shared/lib/store';
import { RouteEnum } from '@/g_shared/model';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';
import { isAuthSelector } from '../modele/selector/session';

type ProtectedRouteProps = {
    children: ReactNode;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = (props) => {
    const router = useRouter();
    const isAuth = useAppSelector(isAuthSelector);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!isAuth) {
                router.push(RouteEnum.LOGIN);
            }
        }
    }, [isAuth]);

    return isAuth ? props.children : null;
};
