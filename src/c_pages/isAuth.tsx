import { FC, ReactNode, useEffect } from 'react';
import { useAppSelector } from '@/g_shared/lib/store';
import { useRouter } from 'next/router';
import { isAuthSelector } from '@/f_entities/redux/session';

type AuthLayoutProps = {
    children: ReactNode;
};

export const AuthLayout: FC<AuthLayoutProps> = (props) => {
    const isAuth = useAppSelector(isAuthSelector);
    const sessionId = sessionStorage.getItem('session_id');
    const router = useRouter();

    useEffect(() => {
        if (!isAuth || !sessionId) {
            router.push('/login');
        }
    }, []);

    return <>{props.children}</>;
};
