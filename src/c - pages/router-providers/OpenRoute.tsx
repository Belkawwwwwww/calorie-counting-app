import { isAuthSelector } from '@/f - entities/redux/session';
import { useAppSelector } from '@/g - shared/lib/store';
import { RouteEnum } from '@/g - shared/model';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';

type OpenRouteProps = {
    children: ReactNode;
}

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
