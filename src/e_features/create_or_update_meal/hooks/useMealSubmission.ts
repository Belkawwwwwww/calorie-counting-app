import { z } from 'zod';

import { useCreateOrUpdateMeal } from './useCreateOrUpdateMeal';
import { MealType } from '@/g_shared/lib/type/nutritionTypes';
import {
    FoodBlock,
    MealValidationErrors,
} from '../../../g_shared/lib/type/createOrUpdateTypes';
import { useState } from 'react';
import { useError } from '@/g_shared/lib/context';
import { formatMealData } from '../lib/createMealDataFormatter';
import { CreateOrUpdateMealSchema } from '@/f_entities/meal/model/createOrUpdateMealSchema';
import { processMealZodErrors } from '../lib/processZodErrorCreateMeal';
import { useMealDataContext } from '@/g_shared/lib/context/meal_context/MealContext';
import { toast } from 'react-toastify';
import { mealsTranslation } from '@/g_shared/lib/utils';

interface Props {
    data: string;
    title: MealType;
    foodBlocks: FoodBlock[];
    onSuccess?: () => void;
}

export const useMealSubmission = ({
    data,
    title,
    foodBlocks,
    onSuccess,
}: Props) => {
    const [validationErrors, setValidationErrors] = useState<
        MealValidationErrors[]
    >([]);
    const { setError, clearError } = useError();
    const { createOrUpdateMeal, isLoading } = useCreateOrUpdateMeal();
    const { refetch } = useMealDataContext();
    const handleSubmit = async () => {
        clearError('createOrUpdateMeal');

        try {
            setValidationErrors(foodBlocks.map(() => ({ id: '', weight: '' })));

            const mealData = formatMealData({
                day: data,
                meal_type: title,
                food: foodBlocks,
            });
            CreateOrUpdateMealSchema.parse(mealData);

            await createOrUpdateMeal(mealData).unwrap();
            if (onSuccess) {
                onSuccess();
            }
            toast.success(` ${mealsTranslation[title]} УСПЕШНО СОЗДАН`, {
                autoClose: 3000,
            });
            refetch();
        } catch (error) {
            if (error instanceof z.ZodError) {
                processMealZodErrors(error, foodBlocks, setValidationErrors);
            } else {
                setError('createOrUpdateMeal', 'Произошла ошибка при создании');
            }
        }
    };

    return { handleSubmit, isLoading, validationErrors };
};
