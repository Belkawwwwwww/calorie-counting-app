import { FC } from 'react';
import { Props } from '../type';
import { ImageBlock, ImageContainer, ImageText } from './style';
import { Image } from '@/g_shared/ui/image';

export const MeasurementDisplay: FC<Props> = (props) => {
    const imageScales = '/scales.png';
    const imageThighs = '/thighs.png';
    const imageWaist = '/waist.png';
    return (
        <>
            <ImageBlock>
                <ImageContainer>
                    <Image src={imageScales} />
                </ImageContainer>

                <ImageText>{props.userData?.data?.data?.weight} кг</ImageText>
            </ImageBlock>
            <ImageBlock>
                <ImageContainer>
                    <Image src={imageWaist}></Image>
                </ImageContainer>

                <ImageText>
                    {props.userData?.data?.data?.waist_girth} см
                </ImageText>
            </ImageBlock>
            <ImageBlock>
                <ImageContainer>
                    <Image src={imageThighs}></Image>
                </ImageContainer>
                <ImageText>{props.userData?.data.data.hip_girth} см</ImageText>
            </ImageBlock>
        </>
    );
};
