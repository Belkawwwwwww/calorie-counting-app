import { FC } from 'react';
import styled from 'styled-components';

type ProneNumberProps = {
    phoneNumber: string;
};

const A = styled.a`
    color: white;
    text-decoration: none;
`;
export const PhoneNumber: FC<ProneNumberProps> = (props) => {
    return <A href={`tel:${props.phoneNumber}`}>{props.phoneNumber}</A>;
};
