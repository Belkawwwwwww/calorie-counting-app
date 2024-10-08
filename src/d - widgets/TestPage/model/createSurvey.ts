import { z } from 'zod';

export const dataScheme = z.object({
    gender: z.enum(['MALE', 'FEMALE']),
    target: z.enum(['LOSE_WEIGHT', 'MAINTAIN_WEIGHT', 'GAIN_WEIGHT']),
    age: z
        .number()
        .int()
        .refine((val) => val >= 0, {
            message: 'Возраст не может быть отрицательным',
        })
        .refine((val) => val > 0, {
            message: 'Введите корректный возраст', // Эта проверка теперь будет выполнена только если предыдущее сообщение прошло
        }),
    growth: z
        .number()
        .nonnegative()
        .positive()
        .refine((val) => val >= 0, {
            message: 'Рост не может быть отрицательным',
        })
        .refine((val) => val > 0, {
            message: 'Введите корректный рост', 
        }),
    birthday: z.date(),
    activity: z.enum([
        'SEDENTARY_LIFESTYLE',
        'MODERATE_LIFESTYLE',
        'ACTIVE_LIFESTYLE',
        'HIGHLY_ACTIVE_LIFESTYLE',
    ]),
    weight: z
        .number()
        .nonnegative()
        .positive()
        .refine((val) => val >= 0, {
            message: 'Вес не может быть отрицательным',
        })
        .refine((val) => val > 0, {
            message: 'Введите корректный вес',
        }),
});

export const CreateSurveyResponseSchema = z.object({
    response_status: z.number(),
    data: z.object({
        id: z.string(),
        user_id: z.string(),
        created_at: z.string().datetime(),
        updated_at: z.string().datetime(),
        data: dataScheme,
    }),
    error: z.null().or(z.string()),
});
