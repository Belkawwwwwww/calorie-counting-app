import {
    createFoodScheme,
    InfoSchema,
    ProductSchema,
} from '@/f_entities/food/model/createFoodSchema';
import { FoodTransition } from '@/g_shared/lib/utils/translation';
import { z } from 'zod';

export type ValidationErrors = {
    name?: string;
    products?: Array<{
        product_id?: string;
        weight?: string;
    }>;
    info?: {
        protein?: string;
        fat?: string;
        carbs?: string;
        calories?: string;
    };
};

type InputField = {
    id: string;
    type: string;
    label: string;
    value: string | number;
    placeholder: string;
    validationSchema: z.ZodType<any>;
    error?: string;
};

export const inputFields = (
    name: string | null,
    products: { product_id: number | null; weight: number | null }[],
    info: {
        protein: number | null;
        fat: number | null;
        carbs: number | null;
        calories: number | null;
    },
    validationErrors: ValidationErrors
): InputField[] => {
    const fields: InputField[] = [
        {
            id: 'name',
            type: 'text',
            label: FoodTransition.name,
            value: name ?? '',
            placeholder: 'ВВЕДИТЕ НАЗВАНИЕ БЛЮДА',
            validationSchema: createFoodScheme.shape.name,
            error: validationErrors.name,
        },
    ];

    products.forEach((product, index) => {
        fields.push(
            {
                id: `product_id_${index}`,
                type: 'number',
                label: FoodTransition.product_id,
                value: product.product_id ?? '',
                placeholder: 'ОБЯЗАТЕЛЬНО',
                validationSchema: ProductSchema.shape.product_id,
                error: validationErrors.products?.[index]?.product_id,
            },
            {
                id: `weight_${index}`,
                type: 'number',
                label: FoodTransition.weight,
                value: product.weight ?? '',
                placeholder: 'НЕОБЯЗАТЕЛЬНО',
                validationSchema: ProductSchema.shape.weight,
                error: validationErrors.products?.[index]?.weight,
            }
        );
    });

    fields.push(
        {
            id: 'protein',
            type: 'number',
            label: FoodTransition.protein,
            value: info.protein ?? '',
            placeholder: 'НЕОБЯЗАТЕЛЬНО',
            validationSchema: InfoSchema.shape.protein,
            error: validationErrors.info?.protein,
        },
        {
            id: 'fat',
            type: 'number',
            label: FoodTransition.fat,
            value: info.fat ?? '',
            placeholder: 'НЕОБЯЗАТЕЛЬНО',
            validationSchema: InfoSchema.shape.fat,
            error: validationErrors.info?.fat,
        },
        {
            id: 'carbs',
            type: 'number',
            label: FoodTransition.carbs,
            value: info.carbs ?? '',
            placeholder: 'НЕОБЯЗАТЕЛЬНО',
            validationSchema: InfoSchema.shape.carbs,
            error: validationErrors.info?.carbs,
        },
        {
            id: 'calories',
            type: 'number',
            label: FoodTransition.calories,
            value: info.calories ?? '',
            placeholder: 'НЕОБЯЗАТЕЛЬНО',
            validationSchema: InfoSchema.shape.calories,
            error: validationErrors.info?.calories,
        }
    );

    return fields;
};
