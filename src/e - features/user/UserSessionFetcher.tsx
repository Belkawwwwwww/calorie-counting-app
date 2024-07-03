import {useFetchUserSessionQuery} from '@/f - entities/api/authApi';
import {setUser} from '@/f - entities/redux/user/model/action/action';
import {useAppDispatch} from '@/g - shared/lib/store';
import {FC, useEffect} from 'react';

interface UserSessionFetcherProps {
}

export const UserSessionFetcher: FC<UserSessionFetcherProps> = () => {
    const dispatch = useAppDispatch();
    const {data, error} = useFetchUserSessionQuery();

    useEffect(() => {
        console.log('id:', data?.data.id);

        if (data?.response_status === 0) {
            dispatch(setUser(data.data.id));
        } else if (error) {
        }
    }, [data]);

    return null;
};
