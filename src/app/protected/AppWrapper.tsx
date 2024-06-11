import {setAuth} from '@/f - entities/session/modele/slice/session';
import {useFetchUserSessionQuery} from '@/g - shared/api/authApi';
import {useAppDispatch} from '@/g - shared/lib/store';
import {FC, ReactNode, useLayoutEffect, useState} from 'react';

export const AppWrapper: FC<{ children: ReactNode }> = ({children}) => {
    const {data, isLoading, error} = useFetchUserSessionQuery();
    const [isSessionChecked, setIsSessionChecked] = useState(false);

    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        console.log('Начинается обработку данных...');
        try {
            if (!isLoading && !error && data) {
                const sessionId = sessionStorage.getItem('session_id');
                const userId = data.data.id;
                if (userId) {
                    if (sessionId !== userId) {
                        console.log('sessionId: ', sessionId);
                        console.log('userId: ', userId);
                        return;
                    }
                    if (data.response_status === 0) {
                        dispatch(setAuth(true));
                        console.log('sessionId: ', sessionId);
                        console.log('userId: ', userId);
                        console.log('response status ok');
                    }
                } else {
                    console.log('sessionId: ', sessionId);
                    console.log('userId: ', userId);
                    console.log('response status ne ok');
                    console.log(data.response_status);
                }
            }
            setIsSessionChecked(true);
        } catch (error) {
            console.error('Ошибка при обработке данных:', error);
        }
    }, [data?.response_status]);

    return isSessionChecked ? <>{children}</> : null;
};
