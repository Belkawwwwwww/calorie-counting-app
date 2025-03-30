import { FC } from 'react';
import { Button } from '../../button';
import { LoadingInBtn } from '../../loader';
import { AddButtonContainer, Plus } from './style';

type Props = {
    onClick: () => void;
    canAdd: boolean;
    isLoading: boolean;
    addBlock: () => void;
};

export const AddButton: FC<Props> = (props) => (
    <AddButtonContainer>
        <Button
            $variant='primary'
            $btnWidth='s'
            $btnSquareSize='button--square--size-m'
            type='button'
            onClick={props.onClick}
        >
            {props.isLoading ? <LoadingInBtn /> : 'ДОБАВИТЬ'}
        </Button>
        {props.canAdd && <Plus onClick={props.addBlock} />}
    </AddButtonContainer>

);
