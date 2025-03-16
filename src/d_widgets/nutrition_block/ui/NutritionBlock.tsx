import { StyledNutritionBlock } from './style';
import { useModalOpen } from '@/g_shared/lib/hooks/useModalOpen/useModalOpen';
import { useGetUserMeal } from '@/e_features/food/hooks/useGetUserMeal';
import { getFormattedDate } from '@/g_shared/lib/utils/dateUtils';
import { FC, memo, useState } from 'react';
import { Meal, MealType, mealTypes } from '@/g_shared/lib/type/nutritionTypes';
import { MealItem } from '@/g_shared/ui/meal_item';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import { NutritionModal } from '../components';
import { calculateCalories } from '@/e_features/food';

export const NutritionBlock: FC = memo(() => {
    const { isModalActive, handleModalOpen, handleModalClose } = useModalOpen();
    const [eat, setEat] = useState('');
    const [mealInfo, setMealInfo] = useState<Meal | null>(null);
    const formattedDate = getFormattedDate();
    const { data: userMealData, isLoading: isMealLoading } =
        useGetUserMeal(formattedDate);
    const caloriesMap: Record<MealType, number> = {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
    };

    const updatedCaloriesMap = calculateCalories(
        userMealData?.data || [],
        caloriesMap
    );

    const handleMealClick = (meal: MealType) => {
        const foundMeal = userMealData?.data.find(
            (mealItem: Meal) => mealItem.meal_type === meal
        );

        setMealInfo(foundMeal || null);

        handleModalOpen();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEat(e.target.value);
    };
    if (isMealLoading) {
        return <LoadingIndicator />;
    }

    return (
        <StyledNutritionBlock>
            {isModalActive ? (
                <NutritionModal
                    data={formattedDate}
                    title={mealInfo?.meal_type || ''}
                    value={eat}
                    onChange={handleChange}
                    onClose={handleModalClose}
                    dataMeal={mealInfo}
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
