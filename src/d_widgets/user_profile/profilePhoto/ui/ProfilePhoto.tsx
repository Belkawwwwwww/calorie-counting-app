import { Image } from '@/g_shared/ui/image';
import { Photo, PhotoContainer, PhotoWrapper } from './style';
import { FC } from 'react';
import { Props } from '../type';

export const ProfilePhoto: FC<Props> = (props) => {
    const imageUrl =
        props.gender === 'FEMALE' ? '/icons_girl.png' : '/icons_boy.png';
    return (
        <PhotoContainer>
            <PhotoWrapper>
                <Photo>
                    <Image src={imageUrl} />
                </Photo>
            </PhotoWrapper>
        </PhotoContainer>
    );
};
