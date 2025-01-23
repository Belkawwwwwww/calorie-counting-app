import { setAuth } from '@/f_entities/redux/session/modele/action/action';
import { setPending } from '@/f_entities/redux/pending/modele/action/action';
import { useAppDispatch } from '@/g_shared/lib/store';
import React, { useEffect, useRef } from 'react';
import { setUser } from '@/f_entities/redux/user/model/action/action';
import { useFetchUser } from '../../auth/hooks/authHooks';

const UserSessionLoader: React.FC = () => {
    const dispatch = useAppDispatch();
    const { data, isSuccess, isError, isLoading } = useFetchUser();

    const prevData = useRef<typeof data | null>(null);

    useEffect(() => {
        const delayedDispatch = setTimeout(() => {
            if (isLoading) {
                dispatch(setPending(true));
            } else if (isSuccess) {
                dispatch(setPending(false));
                if (data?.response_status === 0) {
                    // dispatch(setAuth(true));
                    // dispatch(setUser(data.data.id));
                    if (
                        prevData.current === null ||
                        JSON.stringify(prevData.current) !==
                            JSON.stringify(data)
                    ) {
                        prevData.current = data;
                        dispatch(setAuth(true));
                        dispatch(setUser(data.data.id));
                    }
                } else if (isError) {
                    dispatch(setAuth(false));
                }
            }
        }, 300);

        return () => clearTimeout(delayedDispatch);
    }, [data]);
    return null;
};

export const MemoizedUserSessionLoader = React.memo(UserSessionLoader);
