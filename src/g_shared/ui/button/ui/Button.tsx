import { FC, memo } from 'react';
import { Props } from '@/g_shared/ui/button/type/types';
import { StyledButton } from './style';

export const Button: FC<Props> = memo((props) => {
    return (
        <StyledButton
            disabled={props.disabled}
            onClick={props.onClick}
            {...props}
        >
            {props.children}
        </StyledButton>
    );
});

Button.displayName = 'Button';
