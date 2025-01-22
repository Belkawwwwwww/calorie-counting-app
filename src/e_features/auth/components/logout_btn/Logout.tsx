import { useAppDispatch } from '@/g_shared/lib/store';
import { FC } from 'react';
import { logout } from '@/f_entities/redux/session/modele/slice/session';
import styled from 'styled-components';

const Container = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
`;

export const LogoutBtn: FC = () => {
    const dispatch = useAppDispatch();
    // console.log('Кука до удаления:', Cookies.get('session_id'));
    const handleLogout = () => {
        // const sessionId = Cookies.get('session_id');
        // if (sessionId) {
        //     Cookies.remove('session_id', { Path: '/' });
        // }

        dispatch(logout());
    };
    return <Container onClick={handleLogout}>ВЫХОД</Container>;
};
