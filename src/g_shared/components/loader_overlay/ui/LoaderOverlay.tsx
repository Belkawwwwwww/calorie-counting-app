import React, { FC } from 'react';
import { useAppSelector } from '@/g_shared/lib/store';
import { isPendingSelector } from '@/f_entities/redux/pending';
import { Props } from '../type';
import { Container, Loader } from '../style';

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
