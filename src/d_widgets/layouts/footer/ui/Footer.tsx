import { FC } from 'react';
import { PhoneNumber, SocialMedia } from '@/e_features/contacts';
import {
    ContainerContacts,
    ContainerTelephone,
    StyledFooter,
    Telephone,
} from '../style';

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
