import { useError } from '@/g_shared/lib/context';
import { StyledError } from './style';
import { FC, memo } from 'react';
import { ErrorProps } from '../type';

export const Error: FC<ErrorProps> = memo((props) => {
    const { errors } = useError();

    return (
        <>
            {errors[props.keyName] ? (
                <StyledError>{errors[props.keyName]}</StyledError>
            ) : null}
        </>
    );
});
