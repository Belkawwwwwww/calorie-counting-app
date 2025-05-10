import React, { FC } from 'react';
import { useAppSelector } from '@/g_shared/lib/store';
import { Props } from '../type';
import { Container, Loader } from './style';
import { isPendingSelector } from '@/e_features/pending/modele/selector';
import { useFetchUser } from '@/e_features/auth/lib/hooks';

export const LoaderOverlay: FC<Props> = (props: Props) => {
    const pending = useAppSelector(isPendingSelector);
    const { isLoading, isError } = useFetchUser();
    if (isError) {
        return <p>Ошибка при загрузке приложения.</p>;
    }
    return (
        <>
            {pending && isLoading ? (
                <Container>
                    <Loader></Loader>
                </Container>
            ) : (
                props.children
            )}
        </>
    );
};

export const MemoizedLoader = React.memo(LoaderOverlay);
