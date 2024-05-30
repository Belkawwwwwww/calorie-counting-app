import {FC, ReactNode, useEffect} from 'react';
import {useAppSelector} from '@/g - shared/lib/store';
import {useRouter} from 'next/router';
import {RouteEnum} from '@/g - shared/model/navigation';

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
    const isAuth = useAppSelector((state) => state.session.is_authenticated);
    const router = useRouter();

    useEffect(() => {
        // Проверяем авторизацию пользователя и доступность страницы
        if (!isAuth && !isPageAccessibleForGuests(router.pathname)) {
            router
                .push(RouteEnum.LOGIN)
                .then(() => {
                    console.log('Перенаправлен на страницу авторизации');
                })
                .catch((error) => {
                    console.error(
                        'Ошибка перенаправления на страницу авторизации:',
                        error
                    );
                });
        } else {
            if (isAuth && isPageAccessibleForGuests(router.pathname)) {
                console.log('не работает');
                router.push(RouteEnum.MAIN).then(() => {
                    console.log('Перенаправлен на главную страницу');
                });
            }
        }

        // Если пользователь авторизован, перенаправляем его на главную страницу
        if (isAuth && isPageIsNotAvailableForAutorizedUsers(router.pathname)) {
            router.push(RouteEnum.MAIN).then(() => {
                console.log('Перенаправлен на главную страницу');
            });
        }
    }, []);

    return <>{children}</>;
};

// Функция, которая определяет, доступна ли страница для неавторизованных пользователей
const isPageAccessibleForGuests = (pathname: string): boolean => {
    // Страницы, доступные для неавторизованных пользователей
    return pathname === RouteEnum.LOGIN || pathname === RouteEnum.REGISTRATION;
};

// Функция, которая определяет, недоступна ли страница для авторизованных пользователей
const isPageIsNotAvailableForAutorizedUsers = (pathname: string): boolean => {
    //страницы недосутпные для авторизованных
    return pathname === RouteEnum.LOGIN || pathname === RouteEnum.REGISTRATION;
};

export default AuthLayout;
