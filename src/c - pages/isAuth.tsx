import {FC, ReactNode, useEffect} from 'react';
import {useAppSelector} from '@/g - shared/lib/store';
import {useRouter} from 'next/router';
import {isAuthSelector} from '@/f - entities/redux/session';

interface AuthLayoutProps {
    children: ReactNode;
}

export const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
    const isAuth = useAppSelector(isAuthSelector);
    const sessionId = sessionStorage.getItem('session_id');
    const router = useRouter();

    useEffect(() => {
        if (!isAuth || !sessionId) {
            router.push('/login');
        }
    }, []);

    return <>{children}</>;
};
