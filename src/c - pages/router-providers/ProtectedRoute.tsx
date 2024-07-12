import {isAuthSelector} from '@/f - entities/redux/session';
import {useAppSelector} from '@/g - shared/lib/store';
import {RouteEnum} from '@/g - shared/model/navigation';
import {useRouter} from 'next/router';
import {FC, ReactNode, useEffect} from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({children}) => {
    // const pending = useAppSelector(isPendingSelector);

    const router = useRouter();
    const isAuth = useAppSelector(isAuthSelector);
    console.log('протект');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // if (!isAuth && !pending) {
            //     router.push(RouteEnum.LOGIN);
            // }
            if (!isAuth) {
                router.push(RouteEnum.LOGIN)
            }
        }
    }, [isAuth]);

    return isAuth ? children : null;
};
