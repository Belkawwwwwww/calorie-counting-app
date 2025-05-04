import React from 'react';
import { LogoLink, StyledImage } from './style';
import { RouteEnum } from '@/g_shared/model';

export const Logo = () => {
    const imageUrl = '/Line_1.png';
    return (
        <LogoLink href={RouteEnum.HOME}>
            Calorie Counter
            <StyledImage
                src={imageUrl}
            />
        </LogoLink>
    )
};
