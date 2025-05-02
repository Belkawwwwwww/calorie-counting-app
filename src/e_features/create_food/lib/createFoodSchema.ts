import { z } from 'zod';

export const ProductSchema = z.object({
    weight: z
        .number({ invalid_type_error: 'Вес должен быть числом' })
        .min(1, { message: 'Вес должен быть больше 0' })
});

export const InfoSchema = z.object({
    protein: z
        .number({ invalid_type_error: 'Белки должны быть числом' })
        .min(0, { message: 'Белки не могут быть отрицательными' })
        .optional(),

    fat: z
        .number({ invalid_type_error: 'Жиры должны быть числом' })
        .min(0, { message: 'Жиры не могут быть отрицательными' })
        .optional(),
    carbs: z
        .number({ invalid_type_error: 'Углеводы должны быть числом' })
        .min(0, { message: 'Углеводы не могут быть отрицательными' })
        .optional(),
    calories: z
        .number({ invalid_type_error: 'Калории должны быть числом' })
        .min(0, { message: 'Калории не могут быть отрицательными' })
        .optional(),
});

export const createFoodScheme = z.object({
    name: z.string().nonempty('Описание обязательно для заполнения'),
    is_public: z.boolean(),
    products: z.array(ProductSchema),
    info: InfoSchema,
});

export const CreateFoodResponseSchema = z.object({
    response_status: z.number(),
    data: z.object({
        id: z.number(),
        created_at: z.string().datetime(),
        image: z.null().or(z.string()),
        name: z.string(),
        products: z.null().or(z.string()),
        protein: z.number(),
        fat: z.number(),
        carbs: z.number(),
        calories: z.number(),
        user_id: z.number(),
        is_public: z.boolean(),
        receipt: z.null().or(z.string()),
    }),
    error: z.null().or(z.string()),
});
