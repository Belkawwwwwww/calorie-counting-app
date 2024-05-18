import {FC, ReactNode, useEffect} from "react";
import {useAppSelector} from "@/g - shared/lib/store";
import {useRouter} from "next/router";
import {RouteEnum} from "@/g - shared/model/navigation";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
    const isAuth = useAppSelector(state => state.session.is_authenticated);
    const router = useRouter();

    // если пользователь не аутентиф и страница не является страницей, доступной для неавторизованных пользователей,
    // то перенаправляем пользователя на страницу входа
    useEffect(() => {
        if (!isAuth && !isPageAccessibleForGuests(router.pathname)) {
            router.push(RouteEnum.LOGIN).then(() => {
                // Обработка успешной навигации
                console.log("Перенаправлен на главную страницу");
            }).catch((error) => {
                // Обработка ошибки навигации
                console.error("Ошибка перенаправления на страницу авторизации:", error);
            });

        }
    }, [isAuth, router.pathname]); // eslint-disable-line

    return <>{children}</>;
};
// Функция, которая определяет, доступна ли страница для неавторизованных пользователей
const isPageAccessibleForGuests = (pathname: string): boolean => {
    //страницы доступные и автор и неавториз
    return pathname === '/login' || pathname === '/registration' || pathname === '/' || pathname === '/test';
};

export default AuthLayout;
