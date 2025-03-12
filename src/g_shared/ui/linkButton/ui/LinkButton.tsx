import { useRouter } from 'next/router';
import { FC } from 'react';
import { LinkButtonProps } from '../type';
import { StyledLinkButton } from './style';

export const LinkButton: FC<LinkButtonProps> = (props) => {
    const router = useRouter();
    const handleClick = () => {
        if (props.to) {
            router.push(props.to);
        }
    };

    return (
        <StyledLinkButton onClick={handleClick} {...props}>
            {props.children}
        </StyledLinkButton>
    );
};
