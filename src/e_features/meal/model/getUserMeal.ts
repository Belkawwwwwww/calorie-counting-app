import { z } from 'zod';

// Схема для информации о пище
export const MealFoodInfoSchema = z.object({
    protein: z.number(),
    fat: z.number(),
    carbs: z.number(),
    calories: z.number(),
});

// Схема для каждого продукта в meal_foods
export const MealFoodSchema = z.object({
    type: z.enum(['product', 'food']),
    id: z.number(),
    weight: z.number(),
    info: MealFoodInfoSchema,
    name: z.string(),
});

// Схема для информации о приеме пищи
export const MealSchema = z.object({
    id: z.number(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    deleted_at: z.string().nullable(),
    day: z.string().datetime(),
    user_id: z.number(),
    meal_foods: z.array(MealFoodSchema),
    meal_type: z.enum(['breakfast', 'lunch', 'dinner']),
    weight: z.number(),
    info: MealFoodInfoSchema,
});

// Основная схема ответа
export const MealResponseSchema = z.object({
    response_status: z.number(),
    data: z.array(MealSchema),
    error: z.string().nullable(),
});
