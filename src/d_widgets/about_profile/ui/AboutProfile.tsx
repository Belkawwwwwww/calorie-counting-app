import { Image } from '@/g_shared/ui/image';
import {
    BtnContainer,
    ContainerUsername,
    Photo,
    PhotoContainer,
    PhotoWrapper,
    Username,
} from './style';
import { FC } from 'react';
import { Props } from '../type';
import { UpdateButton } from '@/e_features/user';
import { BodyMeasurements } from '@/d_widgets/body_measurements';

export const AboutProfile: FC<Props> = (props) => {
    const imageUrl =
        props.gender === 'FEMALE' ? '/icons_girl.png' : '/icons_boy.png';
    return (
        <>
            <PhotoContainer>
                <PhotoWrapper>
                    <Photo>
                        <Image src={imageUrl} />
                    </Photo>
                </PhotoWrapper>
            </PhotoContainer>
            <BtnContainer>
                <UpdateButton />
                <BodyMeasurements />
            </BtnContainer>
            <ContainerUsername>
                <Username>
                    {props.first_name} {props.last_name}
                </Username>
            </ContainerUsername>
        </>
    );
};
