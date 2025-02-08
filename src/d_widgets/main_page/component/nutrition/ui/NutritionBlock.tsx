import { Meal, StyledNutritionBlock } from '../style';
import { useModalOpen } from '@/d_widgets/test_page/hooks/useModalOpen';
import { useGetUserMeal } from '@/e_features/food/hooks/foodHoooks';
import { FoodResponseSchema } from '@/e_features/food/model/getUserMeal';
import { FoodResponse } from '@/e_features/food/type/foodTypes';
import { Modal } from '@/g_shared/components/modal';
import { Button } from '@/g_shared/ui/button';
import { InputBox } from '@/g_shared/ui/input';
import { getFormattedDate } from '@/g_shared/utils/dateUtils';
import { FC, memo, useEffect, useState } from 'react';

export const NutritionBlock: FC = memo(() => {
    const { isModalActive, handleModalOpen, handleModalClose } = useModalOpen();
    const [eat, setEat] = useState('');
    const [currentMeal, setCurrentMeal] = useState('');
    const formattedDate = getFormattedDate();
    const { data, isLoading, error } = useGetUserMeal(formattedDate);

    const handleMealClick = (meal: string) => {
        setCurrentMeal(meal);
        handleModalOpen();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEat(e.target.value);
    };
    const meals = ['Завтрак', 'Обед', 'Ужин'];
    // console.log('отработал');
    const mealsByType = {
        breakfast: [] as FoodResponse['data'][number][],
        lunch: [] as FoodResponse['data'][number][],
        dinner: [] as FoodResponse['data'][number][],
    };

    data?.data.forEach((meal) => {
        switch (meal.meal_type) {
            case 'breakfast':
                mealsByType.breakfast.push(meal);
                break;
            case 'lunch':
                mealsByType.lunch.push(meal);
                break;
            case 'dinner':
                mealsByType.dinner.push(meal);
                break;
            default:
                break;
        }
    });

    console.log('Breakfast:', mealsByType.breakfast);
    console.log('Lunch:', mealsByType.lunch);
    console.log('Dinner:', mealsByType.dinner);

    return (
        <StyledNutritionBlock>
            {isModalActive ? (
                <Modal
                    title={currentMeal.toUpperCase()}
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
                <Meal key={meal} onClick={() => handleMealClick(meal)}>
                    {meal} 0/
                </Meal>
            ))}
        </StyledNutritionBlock>
    );
});
