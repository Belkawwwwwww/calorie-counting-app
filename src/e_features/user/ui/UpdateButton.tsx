import { RouteEnum } from '@/g_shared/model';
import { FC } from 'react';
import { BtnTest, ResponsiveButton } from './style';

export const UpdateButton: FC = () => {
    return (
        <BtnTest href={RouteEnum.TEST}>
            <ResponsiveButton
                $variant='secondary'
                $btnWidth='m'
                $btnSquareSize='button--square--size-m'
                type='submit'
            >
                ОБНОВИТЬ ДАННЫЕ
            </ResponsiveButton>
        </BtnTest>
    );
};
