import { FC } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '@/g_shared/lib/store';
import { setAuth } from '@/f_entities/redux/session/modele/slice/session';
import { setUser } from '@/f_entities/redux/user/model/action/action';
import { useLogout } from '../../hooks/authHooks';

const Container = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const LogoutBtn: FC = () => {
    const { logout } = useLogout();
    const dispatch = useAppDispatch();
    const handleLogout = async () => {
        try {
            await logout().unwrap();
            dispatch(setAuth(false));
            dispatch(setUser(null));
        } catch (error) {
            console.log('Ошибка при выходе:', error);
        }
    };
    return <Container onClick={handleLogout}>ВЫХОД</Container>;
};
