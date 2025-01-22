import { FC, memo } from 'react';
import { Props } from '@/g_shared/ui/input/input/type/types';
import { StyledInput } from '../style';

export const Input: FC<Props> = memo(({ onChange, value, ...otherProps }) => {
    return (
        <>
            <StyledInput onChange={onChange} value={value} {...otherProps} />
        </>
    );
});
