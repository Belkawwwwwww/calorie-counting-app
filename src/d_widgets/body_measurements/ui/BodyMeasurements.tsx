import { FC } from 'react';
import { Container, Plus, ContainerImage, Block } from './style';
import { useModalOpen } from '@/g_shared/lib/hooks/useModalOpen/useModalOpen';
import { Modal } from '@/g_shared/ui/modal';
import { useGetUserSurvey } from '@/e_features/survey/hooks/useSurveyHooks';
import { MeasurementDisplay, MeasurementForm } from '@/e_features/survey';

export const BodyMeasurements: FC = () => {
    const { data: userData } = useGetUserSurvey();

    const { isModalActive, handleModalOpen, handleModalClose } = useModalOpen();

    const handleClick = () => {
        handleModalOpen();
    };

    return (
        <Container>
            {isModalActive ? (
                <Modal
                    title='ДОБАВИТЬ ЗАМЕР'
                    onClose={handleModalClose}
                    width='600px'
                    height='auto'
                >
                    <MeasurementForm onClose={handleModalClose} />
                </Modal>
            ) : null}
            <Block>
                <Plus onClick={handleClick} />
                <ContainerImage>
                    <MeasurementDisplay userData={userData} />
                </ContainerImage>
            </Block>
        </Container>
    );
};
