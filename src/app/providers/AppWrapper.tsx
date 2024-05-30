import {setAuth} from '@/f - entities/session/modele/slice/session';
import {useGetUserQuery} from '@/g - shared/api/authApi';
import {useAppDispatch} from '@/g - shared/lib/store';
import {useRouter} from 'next/router';
import {FC, ReactNode, useLayoutEffect} from 'react';

export const AppWrapper: FC<{ children: ReactNode }> = ({children}) => {
    const {data: user} = useGetUserQuery(undefined);
    const dispatch = useAppDispatch();
    const router = useRouter();
    useLayoutEffect(() => {
        const checkAuth = async () => {
            try {
                // Проверяем, что пользователь авторизован
                if (user) {
                    dispatch(setAuth(true));
                } else {
                    dispatch(setAuth(false));
                }
            } catch (error) {
                console.error('Ошибка проверки авторизации:', error);
                dispatch(setAuth(false));
            }
        };

        checkAuth();
    }, [user]);

    return <>{children}</>;
};
