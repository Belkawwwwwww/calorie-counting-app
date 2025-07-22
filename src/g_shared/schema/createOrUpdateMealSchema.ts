import { z } from 'zod';

export const FoodTypeSchema = z.enum(['product', 'food']);
export const MealTypeSchema = z.enum(['breakfast', 'lunch', 'dinner']);

export const WeightSchema = z.object({
    weight: z
        .number({ invalid_type_error: 'Вес должен быть числом' })
        .min(1, { message: 'Вес должен быть больше 0' })
        .max(400, { message: 'Вес не должен превышать 400 г' }),

})
export const FoodItemSchema = z.object({
    weight: z
        .number({ invalid_type_error: 'Вес должен быть числом' })
        .min(1, { message: 'Вес должен быть больше 0' }),
    type: FoodTypeSchema,
});

export const CreateOrUpdateMealSchema = z.object({
    day: z.string(),
    food: z.array(FoodItemSchema),
    meal_type: MealTypeSchema,
});
export const CreateOrUpdateMealResponse = z.object({
    response_status: z.number(),
    data: z.object({
        id: z.number(),
        created_at: z.string().datetime(),
        updated_at: z.string().datetime(),
        deleted_at: z.nullable(z.string().datetime()),
        day: z.string(),
        user_id: z.number(),
        meal_foods: z.array(
            z.object({
                type: FoodTypeSchema,
                id: z.number(),
                weight: z.number(),
                info: z.object({
                    protein: z.number(),
                    fat: z.number(),
                    carbs: z.number(),
                    calories: z.number(),
                }),
                name: z.string(),
            })
        ),
        meal_type: MealTypeSchema,
        weight: z.number(),
        info: z.object({
            protein: z.number(),
            fat: z.number(),
            carbs: z.number(),
            calories: z.number(),
        }),
    }),
    error: z.nullable(z.string()),
});
