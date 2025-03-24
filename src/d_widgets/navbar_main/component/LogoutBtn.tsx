import { FC } from 'react';
import { RouteEnum } from '@/g_shared/model';
import { useLogout } from '@/e_features/auth';
import { LinkButton } from '@/g_shared/ui/linkButton';

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
