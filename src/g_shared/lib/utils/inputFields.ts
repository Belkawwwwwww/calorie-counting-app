import {
    createFoodScheme,
    ProductSchema,
} from '@/f_entities/food/model/createFoodSchema';
import { FoodTransition } from './translation';
import { InfoSchema } from '@/f_entities/meal/model/createOrUpdateMealSchema';

export const inputFields = [
    {
        type: 'text',
        id: 'name',
        label: FoodTransition.name,
        placeholder: 'ВВЕДИТЕ НАЗВАНИЕ БЛЮДА',
        validationSchema: createFoodScheme.shape.name,
    },
    {
        type: 'number',
        id: 'weight',
        label: FoodTransition.weight,
        placeholder: 'НЕОБЯЗАТЕЛЬНО',
        validationSchema: ProductSchema.shape.weight,
    },
    {
        type: 'number',
        id: 'product_id',
        label: FoodTransition.product_id,
        placeholder: 'ОБЯЗАТЕЛЬНО',
        validationSchema: ProductSchema.shape.product_id,
    },
    {
        type: 'number',
        id: 'protein',
        label: FoodTransition.protein,
        placeholder: 'НЕОБЯЗАТЕЛЬНО',
        validationSchema: InfoSchema.shape.protein,
    },
    {
        type: 'number',
        id: 'fat',
        label: FoodTransition.fat,
        placeholder: 'НЕОБЯЗАТЕЛЬНО',
        validationSchema: InfoSchema.shape.fat,
    },
    {
        type: 'number',
        id: 'carbs',
        label: FoodTransition.carbs,
        placeholder: 'НЕОБЯЗАТЕЛЬНО',
        validationSchema: InfoSchema.shape.carbs,
    },
    {
        type: 'number',
        id: 'calories',
        label: FoodTransition.calories,
        placeholder: 'НЕОБЯЗАТЕЛЬНО',
        validationSchema: InfoSchema.shape.calories,
    },
];
