import { FC } from 'react';
import { RouteEnum } from '@/g_shared/model';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { useLogout } from '../lib/hooks';

export const LogoutBtn: FC = () => {
    const { logout } = useLogout();
    const handleLogout = async () => {
        try {
            await logout().unwrap();
        } catch (error) {
            console.log('Ошибка при выходе:', error);
        }
    };
    return (
        <LinkButton onClick={handleLogout} to={RouteEnum.LOGIN}>
            ВЫХОД
        </LinkButton>
    );
};
