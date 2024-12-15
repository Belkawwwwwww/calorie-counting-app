import { Meal, StyledNutritionBlock } from '../style';
import { useModalOpen } from '@/d - widgets/test-page/hooks/useModalOpen';
import { Modal } from '@/g - shared/components/modal';
import { Button } from '@/g - shared/ui/button';
import { InputBox } from '@/g - shared/ui/input';
import { useState } from 'react';

export const NutritionBlock = () => {
    const { isModalActive, handleModalOpen, handleModalClose } = useModalOpen();
    const [eat, setEat] = useState('');

    const handleClick = () => {
        handleModalOpen();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEat(e.target.value);
    };
    const meals = ['Завтрак', 'Обед', 'Ужин', 'Перекус'];

    return (
        <StyledNutritionBlock>
            {isModalActive ? (
                <Modal
                    title='ПОИСК'
                    onClose={handleModalClose}
                    width='600px'
                    height='auto'
                >
                    <InputBox value={eat} onChange={handleChange} />
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
            {meals.map((meal) => (
                <Meal key={meal} onClick={handleClick}>
                    {meal} 0/
                </Meal>
            ))}
        </StyledNutritionBlock>
    );
};
