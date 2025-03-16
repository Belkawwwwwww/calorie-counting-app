import {
    createFoodScheme,
    InfoSchema,
    ProductSchema,
} from '@/f_entities/food/model/createFoodSchema';
import { CreateFoodInfo } from '@/f_entities/food/type';
import { FoodTransition } from '@/g_shared/lib/utils/translation';
import { z } from 'zod';

type ValidationErrors = {
    name?: string;
    product_id?: string;
    weight?: string;
    protein?: string;
    fat?: string;
    carbs?: string;
    calories?: string;
};

type InputField = {
    id: keyof CreateFoodInfo;
    type: string;
    label: string;
    value: string | number;
    placeholder: string;
    validationSchema: z.ZodTypeAny;
    error?: string;
};

export const inputFields = (
    name: string | null,
    product_id: number | null,
    weight: number | null,
    protein: number | null,
    fat: number | null,
    carbs: number | null,
    calories: number | null,
    validationErrors: ValidationErrors
): InputField[] => [
    {
        id: 'name',
        type: 'text',
        label: FoodTransition.name,
        value: name ?? '',
        placeholder: 'ВВЕДИТЕ НАЗВАНИЕ БЛЮДА',
        validationSchema: createFoodScheme.shape.name,
        error: validationErrors.name,
    },
    {
        id: 'product_id',
        type: 'number',
        label: FoodTransition.product_id,
        value: product_id ?? '',
        placeholder: 'ОБЯЗАТЕЛЬНО',
        validationSchema: ProductSchema.shape.product_id,
        error: validationErrors.product_id,
    },
    {
        id: 'weight',
        type: 'number',
        label: FoodTransition.weight,
        value: weight ?? '',
        placeholder: 'НЕОБЯЗАТЕЛЬНО',
        validationSchema: ProductSchema.shape.weight,
        error: validationErrors.weight,
    },
    {
        id: 'protein',
        type: 'number',
        label: FoodTransition.protein,
        value: protein ?? '',
        placeholder: 'НЕОБЯЗАТЕЛЬНО',
        validationSchema: InfoSchema.shape.protein,
        error: validationErrors.protein,
    },
    {
        id: 'fat',
        type: 'number',
        label: FoodTransition.fat,
        value: fat ?? '',
        placeholder: 'НЕОБЯЗАТЕЛЬНО',
        validationSchema: InfoSchema.shape.fat,
        error: validationErrors.fat,
    },
    {
        id: 'carbs',
        type: 'number',
        label: FoodTransition.carbs,
        value: carbs ?? '',
        placeholder: 'НЕОБЯЗАТЕЛЬНО',
        validationSchema: InfoSchema.shape.carbs,
        error: validationErrors.carbs,
    },
    {
        id: 'calories',
        type: 'number',
        label: FoodTransition.calories,
        value: calories ?? '',
        placeholder: 'НЕОБЯЗАТЕЛЬНО',
        validationSchema: InfoSchema.shape.calories,
        error: validationErrors.calories,
    },
];
