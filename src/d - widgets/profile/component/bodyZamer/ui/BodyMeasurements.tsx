import { FC, useState } from 'react';
import {
    Container,
    Plus,
    ContainerImage,
    Block,
    Image,
    ImageBlock,
    ImageText,
} from '../style';
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
                        // type='number'
                        label='ВЕС'
                        value={measurements.weight}
                        onChange={(e) => handleChange(e, 'weight')}
                        placeholder='КГ'
                    />
                    <InputBox
                        // type='number'
                        label='ОБХВАТ ТАЛИИ'
                        value={measurements.waist}
                        onChange={(e) => handleChange(e, 'waist')}
                        placeholder='СМ'
                    />
                    <InputBox
                        // type='number'
                        label='ОБХВАТ БЕДЕР'
                        value={measurements.hips}
                        onChange={(e) => handleChange(e, 'hips')}
                        placeholder='СМ'
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
                    <ImageBlock>
                        <Image src={imageScales}></Image>
                        <ImageText>47 кг</ImageText>
                    </ImageBlock>
                    <ImageBlock>
                        <Image src={imageWaist}></Image>
                        <ImageText>59 см</ImageText>
                    </ImageBlock>
                    <ImageBlock>
                        <Image src={imageThighs}></Image>
                        <ImageText>90 см</ImageText>
                    </ImageBlock>
                </ContainerImage>
            </Block>
        </Container>
    );
};
