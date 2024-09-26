import { FC } from 'react';
import styled from 'styled-components';

interface ProneNumberProps {
    phoneNumber: string;
}

const StyledA = styled.a`
    color: white;
    text-decoration: none;
`;
export const PhoneNumber: FC<ProneNumberProps> = ({ phoneNumber }) => {
    return <StyledA href={`tel:${phoneNumber}`}>{phoneNumber}</StyledA>;
};
