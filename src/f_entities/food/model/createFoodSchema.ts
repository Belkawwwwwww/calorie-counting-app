import { z } from 'zod';

export const ProductSchema = z.object({
    product_id: z
        .number()
        .min(1, 'ID продукта обязателен и должен быть больше 0'),
    weight: z
        .number()
        // .min(1, 'Введите корректное значение')
        .refine((val) => val >= 0, {
            message: 'Не может быть отрицательным',
        })
        // .refine((val) => val > 0, {
        //     message: 'Введите корректное значение',
        // })
        .optional(),
});

export const InfoSchema = z.object({
    protein: z
        .number()
        .refine((val) => val >= 0, { message: 'Не может быть отрицательным' })
        .optional(),

    fat: z
        .number()
        .refine((val) => val >= 0, { message: 'Не может быть отрицательным' })
        .optional(),
    carbs: z
        .number()
        .refine((val) => val >= 0, { message: 'Не может быть отрицательным' })
        .optional(),
    calories: z
        .number()
        .refine((val) => val >= 0, { message: 'Не может быть отрицательным' })
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
