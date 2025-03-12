import { FC } from 'react';
import { Button } from '../../button';
import { Props } from '../type';

export const AddMoreButton: FC<Props> = (props) => (
    <Button
        $btnSquareSize='button--square--size-s'
        $btnWidth='m'
        $variant='primary'
        type='button'
        onClick={props.onClick}
    >
        ДОБАВИТЬ ЕЩЕ
    </Button>
);
