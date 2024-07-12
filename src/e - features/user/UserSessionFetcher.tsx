import {useFetchUserSessionQuery} from '@/f - entities/api/authApi';
import {setAuth} from '@/f - entities/redux/session/modele/action/action';
import {setUser} from '@/f - entities/redux/user/model/action/action';
import {setPending} from '@/f - entities/redux/pending/modele/action/action';
import {useAppDispatch} from '@/g - shared/lib/store';
import {useCallback, useEffect} from 'react';

export const UserSessionFetcher = () => {
    const dispatch = useAppDispatch();
    const {data, error, isFetching} = useFetchUserSessionQuery();
    console.log('отработал');

    const fetchUserSession = useCallback(() => {
        if (isFetching || data === undefined) {
            dispatch(setPending(true));
        } else {
            dispatch(setPending(false));

            if (data?.response_status === 0) {
                dispatch(setAuth(true));
                dispatch(setUser(data.data.id));
            } else if (error) {
                dispatch(setAuth(false));
            }
        }
    }, [data]);

    useEffect(() => {
        fetchUserSession();
    }, [fetchUserSession]);

    return null;
};
