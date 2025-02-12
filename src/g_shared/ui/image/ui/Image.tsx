import { FC } from 'react';
import { ImageProps } from '../type';

export const Image: FC<ImageProps> = (props) => {
    return props.src ? <img src={props.src} alt='Image' /> : null;
};
