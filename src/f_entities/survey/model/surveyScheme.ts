import { z } from 'zod';

export const surveyScheme = z.object({
    gender: z.enum(['MALE', 'FEMALE']),
    target: z.enum(['LOSE_WEIGHT', 'MAINTAIN_WEIGHT', 'GAIN_WEIGHT']),
    growth: z
        .number({ invalid_type_error: 'Рост должен быть числом' })
        .refine((val) => val <= 300, {
            message: 'Рост не может превышать 300 см',
        })
        .refine((val) => val >= 0, {
            message: 'Рост не может быть отрицательным',
        })
        .refine((val) => val > 0, {
            message: 'Введите корректный рост',
        }),
    birthday: z.union([z.date(), z.null()]),
    activity: z.enum([
        'SEDENTARY_LIFESTYLE',
        'MODERATE_LIFESTYLE',
        'ACTIVE_LIFESTYLE',
        'HIGHLY_ACTIVE_LIFESTYLE',
    ]),
    weight: z
        .number({ invalid_type_error: 'Вес должен быть числом' })
        .refine((val) => val <= 500, {
            message: 'Вес не может превышать 500 кг',
        })
        .refine((val) => val >= 0, {
            message: 'Вес не может быть отрицательным',
        })
        .refine((val) => val > 0, {
            message: 'Введите корректный вес',
        }),
    waist_girth: z
        .number({ invalid_type_error: 'Обхват талии должен быть числом' })
        .refine((val) => val <= 500, {
            message: 'Обхват талии не может превышать 300см',
        })
        .refine((val) => val >= 0, {
            message: 'Обхват талии  не может быть отрицательным',
        })
        .refine((val) => val > 0, {
            message: 'Введите корректные значения',
        }),
    hip_girth: z
        .number({ invalid_type_error: 'Обхват бедер должен быть числом' })
        .refine((val) => val <= 500, {
            message: 'Обхват бедер не может превышать 300см',
        })
        .refine((val) => val >= 0, {
            message: 'Обхват бедер  не может быть отрицательным',
        })
        .refine((val) => val > 0, {
            message: 'Введите корректные значения',
        }),
});

export const CreateSurveyResponseSchema = z.object({
    response_status: z.number(),
    data: z.object({
        id: z.number(),
        user_id: z.number(),
        created_at: z.string().datetime(),
        updated_at: z.string().datetime(),
        deleted_at: z.string(),
        data: surveyScheme,
    }),
    error: z.null().or(z.string()),
});
