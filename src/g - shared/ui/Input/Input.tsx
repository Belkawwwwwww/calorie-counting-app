import { FC, memo } from 'react';
import { Props } from '@/g - shared/ui/input/types';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid #eaeff2;
    border-radius: 4px;
    padding: 14px 20px;
    outline: none;
    font-size: 17px;
    margin-top: 6px;
    margin-bottom: 8px;
`;

export const Input: FC<Props> = memo(({ onChange, value, ...otherProps }) => {
    return (
        <>
            <StyledInput onChange={onChange} value={value} {...otherProps} />
        </>
    );
});
