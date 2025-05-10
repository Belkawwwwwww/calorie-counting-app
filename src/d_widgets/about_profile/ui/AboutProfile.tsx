import { HeaderProfile } from '@/d_widgets/header_profile';
import { FC } from 'react';
import { Props } from '../type';
import {
    ContainerUsername,
    Username
} from './style';


export const AboutProfile: FC<Props> = (props) => {
    return (
        <>
            <HeaderProfile />
            <ContainerUsername>
                <Username>
                    {props.first_name} {props.last_name}
                </Username>
            </ContainerUsername>
        </>
    );
};
