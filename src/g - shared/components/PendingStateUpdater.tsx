import {useFetchUserSessionQuery} from '@/f - entities/api/authApi';
import {useAppDispatch} from '../lib/store';
import {useEffect} from 'react';
import {setPending} from '@/f - entities/redux/pending/modele/action/action';

export const PendingStateUpdater = () => {
    const dispatch = useAppDispatch();
    const {data, error} = useFetchUserSessionQuery();

    useEffect(() => {
        console.log('data:', data);

        if (data === undefined || error !== undefined) {
            dispatch(setPending(true));
        } else {
            dispatch(setPending(false));
        }
    }, [data]);

    return null;
};
