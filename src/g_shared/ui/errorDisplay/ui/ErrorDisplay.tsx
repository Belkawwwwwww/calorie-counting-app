import { useError } from '@/g_shared/lib/context';
import { StyledError } from './style';
import { FC } from 'react';
import { ErrorProps } from '../type';

export const Error: FC<ErrorProps> = (props) => {
    const { errors } = useError();

    return (
        <>
            {errors[props.keyName] ? (
                <StyledError>{errors[props.keyName]}</StyledError>
            ) : null}
        </>
    );
};
