import { FC, memo } from 'react';
import { Props } from '@/g_shared/ui/button/type/types';
import { StyledButton } from '../style';

export const Button: FC<Props> = memo(
    ({ children, disabled, onClick, ...otherProps }) => {
        return (
            <StyledButton disabled={disabled} onClick={onClick} {...otherProps}>
                {children}
            </StyledButton>
        );
    }
);

Button.displayName = 'Button';
