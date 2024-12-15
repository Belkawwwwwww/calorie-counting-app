import { FC, useState } from 'react';
import { Container, Plus, ContainerImage, Block, Image } from '../style';
import { useModalOpen } from '@/d - widgets/test-page/hooks/useModalOpen';
import { Modal } from '@/g - shared/components/modal';
import { Button } from '@/g - shared/ui/button';
import { InputBox } from '@/g - shared/ui/input';

export const BodyMeasurements: FC = () => {
    const [measurements, setMeasurements] = useState({
        weight: '',
        waist: '',
        hips: '',
    });

    const { isModalActive, handleModalOpen, handleModalClose } = useModalOpen();
    const imageScales = '/scales.png';
    const imageThighs = '/thighs.png';
    const imageWaist = '/waist.png';
    const handleClick = () => {
        handleModalOpen();
    };
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        name: keyof typeof measurements
    ) => {
        setMeasurements({ ...measurements, [name]: e.target.value });
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
                    <InputBox
                        label='ВЕС'
                        value={measurements.weight}
                        onChange={(e) => handleChange(e, 'weight')}
                    />
                    <InputBox
                        label='ОБХВАТ ТАЛИИ'
                        value={measurements.waist}
                        onChange={(e) => handleChange(e, 'waist')}
                    />
                    <InputBox
                        label='ОБХВАТ БЕДЕР'
                        value={measurements.hips}
                        onChange={(e) => handleChange(e, 'hips')}
                    />
                    <Button
                        $btnSquareSize='button--square--size-s'
                        $btnWidth='s'
                        $variant='primary'
                        type='button'
                    >
                        ДОБАВИТЬ
                    </Button>
                </Modal>
            ) : null}
            <Block>
                <Plus onClick={handleClick} />
                <ContainerImage>
                    <Image src={imageScales}></Image>
                    <Image src={imageWaist}></Image>
                    <Image src={imageThighs}></Image>
                </ContainerImage>
            </Block>
        </Container>
    );
};
