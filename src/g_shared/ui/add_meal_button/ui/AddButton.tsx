import { FC } from 'react';
import { Button } from '../../button';
import { LoadingInBtn } from '../../loader';
import { AddButtonContainer, Plus } from './style';

type Props = {
    onClick?: () => void;
    canAdd?: boolean;
    isLoading?: boolean;
    addBlock?: () => void;
    text?: string
    $btnWidth?: 'm' | 'l';
    centered?: boolean;
};

export const AddButton: FC<Props> = ({ $btnWidth = 'm', centered = false, onClick, canAdd, isLoading, addBlock, text }) => (
    <AddButtonContainer centered={centered}>
        <Button
            $variant='primary'
            $btnWidth={$btnWidth}
            $btnSquareSize='button--square--size-m'
            type='button'
            onClick={onClick}

        >
            {isLoading ? <LoadingInBtn /> : text || 'ДОБАВИТЬ'}

        </Button>
        {canAdd && <Plus onClick={addBlock} />}
    </AddButtonContainer>

);
