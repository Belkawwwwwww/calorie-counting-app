import { MealType } from '@/g_shared/lib/type/nutritionTypes';
import { useMealDataContext } from '../../context/meal_context/MealContext';

export const useNutritionData = (mealType: MealType) => {
    const { mealData, isLoading, error } = useMealDataContext();
    if (
        isLoading ||
        error ||
        !mealData ||
        !mealData.data ||
        mealData.data.length === 0
    ) {
        return [
            { value: 0, label: 'Калории' },
            { value: 0, label: 'Углеводы' },
            { value: 0, label: 'Белки' },
            { value: 0, label: 'Жиры' },
        ];
    }
    const filteredMeals = mealData.data.filter(
        (meal) => meal.meal_type === mealType
    );
    const aggregatedData = filteredMeals.reduce(
        (acc, meal) => {
            acc.calories += meal.info.calories;
            acc.carbs += meal.info.carbs;
            acc.protein += meal.info.protein;
            acc.fat += meal.info.fat;
            return acc;
        },
        { calories: 0, carbs: 0, protein: 0, fat: 0 }
    );

    return [
        { value: Math.ceil(aggregatedData.calories), label: 'Калории' },
        { value: Math.ceil(aggregatedData.carbs), label: 'Углеводы' },
        { value: Math.ceil(aggregatedData.protein), label: 'Белки' },
        { value: Math.ceil(aggregatedData.fat), label: 'Жиры' },
    ];
};
