import React from 'react';
import { LinkButton } from '../../linkButton';
import { Modal } from '../../modal';
import { Props } from '../type';
import { Container } from './style';

export const ImageOptionsModal: React.FC<Props> = (props) => {
    return (
        <Modal
            onClose={props.onClose}
            width='234px'
            height='auto'
        >
            <Container>
                <LinkButton onClick={props.onDelete}>Удалить фото</LinkButton>
                <LinkButton onClick={props.onChooseNew}>Выбрать другое фото</LinkButton>
            </Container>
        </Modal>
    );
};