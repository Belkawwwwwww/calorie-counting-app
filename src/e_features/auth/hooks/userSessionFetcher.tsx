import { setAuth } from '@/e_features/auth/modele/action/action';
import { setPending } from '@/e_features/pending/modele/action/action';
import { useAppDispatch } from '@/g_shared/lib/store';
import React, { useEffect, useRef } from 'react';
import { setUser } from '@/f_entities/user/model/action/action';
import { useFetchUser } from './useAuthHooks';

const UserSessionLoader: React.FC = () => {
    const dispatch = useAppDispatch();
    const { data, isSuccess, isError, isLoading } = useFetchUser();

    const prevData = useRef<typeof data | null>(null);

    useEffect(() => {
        if (isLoading) {
            dispatch(setPending(true));
        } else if (isSuccess) {
            dispatch(setPending(false));
            if (data?.response_status === 0) {
                if (
                    prevData.current === null ||
                    JSON.stringify(prevData.current) !== JSON.stringify(data)
                ) {
                    prevData.current = data;
                    dispatch(setAuth(true));
                    dispatch(setUser(data?.data.id));
                }
            } else if (isError || data?.response_status !== 0) {
                dispatch(setAuth(false));
            }
        }
    }, [data]);
    return null;
};

export const MemoizedUserSessionLoader = React.memo(UserSessionLoader);
