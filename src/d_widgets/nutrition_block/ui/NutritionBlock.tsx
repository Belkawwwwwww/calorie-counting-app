import { StyledNutritionBlock } from './style';
import { useModalOpen } from '@/g_shared/lib/hooks/useModalOpen/useModalOpen';
import { useGetUserMeal } from '@/e_features/food/get_meal/hooks/useGetUserMeal';
import { getFormattedDate } from '@/g_shared/lib/utils/dateUtils';
import { FC, memo, useCallback, useState } from 'react';
import { Meal, MealType, mealTypes } from '@/g_shared/lib/type/nutritionTypes';
import { MealItem } from '@/g_shared/ui/meal_item';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import { NutritionModal } from '../components';
import { calculateCalories } from '@/e_features/food';

export const NutritionBlock: FC = memo(() => {
    const { isModalActive, handleModalOpen, handleModalClose } = useModalOpen();
    const [eat, setEat] = useState('');
    const [mealInfo, setMealInfo] = useState<Meal | null>(null);
    const [selectedMealType, setSelectedMealType] = useState<MealType | null>(
        null
    );
    const formattedDate = getFormattedDate();
    const {
        data: userMealData,
        isLoading: isMealLoading,
        error,
    } = useGetUserMeal(formattedDate);
    const caloriesMap: Record<MealType, number> = {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
    };

    const updatedCaloriesMap = calculateCalories(
        userMealData?.data || [],
        caloriesMap
    );

    const handleMealClick = useCallback(
        (mealType: MealType) => {
            const foundMeal = userMealData?.data.find(
                (mealItem: Meal) => mealItem.meal_type === mealType
            );

            setMealInfo(foundMeal || null);
            setSelectedMealType(mealType);
            handleModalOpen();
        },
        [userMealData?.data, handleModalOpen]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEat(e.target.value);
    };
    if (isMealLoading) {
        return <LoadingIndicator />;
    }
    if (error) {
        return <p>Ошибка при загрузке данных о питании.</p>;
    }

    return (
        <StyledNutritionBlock>
            {isModalActive ? (
                <NutritionModal
                    data={formattedDate}
                    title={
                        selectedMealType || 'breakfast' || 'dinner' || 'lunch'
                    }
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
