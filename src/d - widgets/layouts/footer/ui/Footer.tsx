import { FC } from 'react';
import styled from 'styled-components';
import { PhoneNumber, SocialMedia } from '@/e - features/contacts';

const StyledFooter = styled.footer`
    position: relative;
    display: flex;
    padding: 15px 100px 15px 100px;
    background-color: #89ac76;
    color: white;
    flex-wrap: wrap;
`;
const ContainerTelephone = styled.div``;
const Telephone = styled.p``;
const ContainerContacts = styled.div``;

export const Footer: FC = () => {
    return (
        <StyledFooter>
            <ContainerTelephone>
                <Telephone>Телефон</Telephone>
                <PhoneNumber phoneNumber='+79826004039' />
            </ContainerTelephone>
            <ContainerContacts>
                <SocialMedia />
            </ContainerContacts>
        </StyledFooter>
    );
};
