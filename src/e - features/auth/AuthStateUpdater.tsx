import {useFetchUserSessionQuery} from '@/g - shared/api/authApi';
import {isAuthSelector} from '@/f - entities/redux/session';
import {setAuth} from '@/f - entities/redux/session/modele/action/action';
import {useAppDispatch, useAppSelector} from '@/g - shared/lib/store';
import {useEffect} from 'react';

interface AuthStateUpdaterProps {
}

export const AuthStateUpdater = () => {
    const dispatch = useAppDispatch();
    const {data, error} = useFetchUserSessionQuery();
    const isAuth = useAppSelector(isAuthSelector);

    useEffect(() => {
        console.log('isAuth: ', isAuth);

        if (data?.response_status === 0) {
            dispatch(setAuth(true));
        } else if (error) {
            dispatch(setAuth(false));
        }
    }, [data]);

    return null;
};
