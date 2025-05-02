import { Image } from '@/g_shared/ui/image';
import { FC } from 'react';
import { Props } from '../type';
import {
    ContainerUsername,
    Photo,
    PhotoContainer,
    PhotoWrapper,
    Username,
} from './style';

export const AboutProfile: FC<Props> = (props) => {
    const imageUrl =
        props.gender === 'FEMALE' ? '/icons_girl.png' : '/icons_boy.png';
    return (
        <>
            <PhotoContainer>
                <PhotoWrapper>
                    <Photo>
                        <Image
                            src={imageUrl}
                            alt={`Изображение профиля для ${props.first_name} ${props.last_name}`}
                        />
                    </Photo>
                </PhotoWrapper>
            </PhotoContainer>
            <ContainerUsername>
                <Username>
                    {props.first_name} {props.last_name}
                </Username>
            </ContainerUsername>
        </>
    );
};
