import { StyledNutritionBlock } from './style';
import { useModalOpen } from '@/g_shared/lib/hooks/useModalOpen/useModalOpen';
import { useGetUserMeal } from '@/e_features/meal/hooks/useGetUserMeal';
import { getFormattedDate } from '@/g_shared/lib/utils/dateUtils';
import { FC, memo, useState } from 'react';
import { Meal, MealType, mealTypes } from '@/f_entities/meal/type/mealModel';
import { InputModal } from '@/g_shared/ui/input_processing/ui/InputModal';
import { calculateCalories } from '@/e_features/meal/utils/calorieCalculator';
import { MealItem } from '@/g_shared/ui/meal_item/ui/MealItem';

export const NutritionBlock: FC = memo(() => {
    const { isModalActive, handleModalOpen, handleModalClose } = useModalOpen();
    const [eat, setEat] = useState('');
    const [mealInfo, setMealInfo] = useState<Meal | null>(null);
    const formattedDate = getFormattedDate();
    const { data: dataMeal } = useGetUserMeal(formattedDate);
    const caloriesMap: Record<MealType, number> = {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
    };
    const updatedCaloriesMap = calculateCalories(dataMeal, caloriesMap);

    const handleMealClick = (meal: MealType) => {
        const foundMeal = dataMeal?.data.find(
            (mealItem: Meal) => mealItem.meal_type === meal
        );

        if (foundMeal) {
            setMealInfo(foundMeal);
        } else {
            setMealInfo(null);
        }

        handleModalOpen();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEat(e.target.value);
    };

    return (
        <StyledNutritionBlock>
            {isModalActive ? (
                <InputModal
                    title={mealInfo?.meal_type || ''}
                    value={eat}
                    onChange={handleChange}
                    onClose={handleModalClose}
                    mealInfo={mealInfo ? mealInfo.info : null}
                />
            ) : null}
            <>
                {mealTypes.map((mealType) => (
                    <MealItem
                        key={mealType}
                        mealType={mealType}
                        calories={updatedCaloriesMap[mealType]}
                        onClick={() => handleMealClick(mealType)}
                    />
                ))}
            </>
        </StyledNutritionBlock>
    );
});
