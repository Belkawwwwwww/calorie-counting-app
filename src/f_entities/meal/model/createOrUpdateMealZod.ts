import { z } from 'zod';

export const FoodTypeSchema = z.enum(['product', 'food']);
export const MealTypeSchema = z.enum(['breakfast', 'lunch', 'dinner']);

export const FoodItemSchema = z.object({
    type: FoodTypeSchema,
    id: z.number().int(),
    weight: z.number().refine((val) => val > 0, {
        message: 'Введите корректное значение',
    }),
});
export const MealSchema = z.object({
    day: z.string(),
    food: z.array(FoodItemSchema),
    meal_type: MealTypeSchema,
});
export const InfoSchema = z.object({
    protein: z.number(),
    fat: z.number(),
    carbs: z.number(),
    calories: z.number(),
});
const MealFoodSchema = z.object({
    type: FoodTypeSchema,
    id: z.number(),
    weight: z.number(),
    info: InfoSchema,
    name: z.string(),
});
export const DataSchema = z.object({
    id: z.number(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    deleted_at: z.nullable(z.string().datetime()),
    day: z.string(),
    user_id: z.number(),
    meal_foods: z.array(MealFoodSchema),
    meal_type: MealTypeSchema,
    weight: z.number(),
    info: InfoSchema,
});
export const CreateOrUpdateMealResponse = z.object({
    response_status: z.number(),
    data: z.array(DataSchema),

    error: z.null().or(z.string()),
});
