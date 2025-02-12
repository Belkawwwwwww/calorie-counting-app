import React, { FC } from 'react';
import { useAppSelector } from '@/g_shared/lib/store';
import { isPendingSelector } from '@/e_features/pending/modele';
import { Props } from '../type';
import { Container, Loader } from './style';

export const LoaderOverlay: FC<Props> = (props: Props) => {
    const pending = useAppSelector(isPendingSelector);

    return (
        <>
            {pending ? (
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
