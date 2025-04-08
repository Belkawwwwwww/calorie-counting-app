import { forwardRef, memo } from 'react';
import { Props } from '@/g_shared/ui/input/input/type/types';
import { StyledInput } from './style';

export const Input = memo(
    forwardRef<HTMLInputElement, Props>(
        ({ onChange, value, ...otherProps }, ref) => {
            return (
                <>
                    <StyledInput
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        {...otherProps}
                    />
                </>
            );
        },
    ),
)
