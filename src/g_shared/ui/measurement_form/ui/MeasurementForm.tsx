import { Button } from '@/g_shared/ui/button';
import { InputBox } from '@/g_shared/ui/input';
import { FC, useState } from 'react';
import { Props } from '../type';

export const MeasurementForm: FC<Props> = (props) => {
    const [measurements, setMeasurements] = useState({
        weight: '',
        waist: '',
        hips: '',
    });
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        name: keyof typeof measurements
    ) => {
        setMeasurements({ ...measurements, [name]: e.target.value });
    };
    const handleSubmit = () => {
        props.onClose(); 
    };

    return (
        <>
            <InputBox
                type='number'
                label='ВЕС'
                value={measurements.weight}
                onChange={(e) => handleChange(e, 'weight')}
                placeholder='КГ'
            />
            <InputBox
                type='number'
                label='ОБХВАТ ТАЛИИ'
                value={measurements.waist}
                onChange={(e) => handleChange(e, 'waist')}
                placeholder='СМ'
            />
            <InputBox
                type='number'
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
                onClick={handleSubmit}
            >
                ДОБАВИТЬ
            </Button>
        </>
    );
};
