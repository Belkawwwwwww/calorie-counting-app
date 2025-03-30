import { FC } from 'react';
import { Container, Plus, ContainerImage, Block } from './style';
import { Modal } from '@/g_shared/ui/modal';
import { MeasurementForm } from '@/g_shared/ui/measurement_form';
import { MeasurementDisplay } from '@/g_shared/ui/measurement_display';
import { useModalOpen } from '@/g_shared/lib/hooks';
import { useGetUserSurvey } from '@/e_features/survey/hooks';

export const BodyMeasurements: FC = () => {
    const { data: userData } = useGetUserSurvey();

    const { isModalActive, handleModalOpen, handleModalClose } = useModalOpen();

    // const handleClick = () => {
    //     handleModalOpen();
    // };

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
                {/* <Plus onClick={handleClick} /> */}
                <ContainerImage>
                    <MeasurementDisplay userData={userData} />
                </ContainerImage>
            </Block>
        </Container>
    );
};
