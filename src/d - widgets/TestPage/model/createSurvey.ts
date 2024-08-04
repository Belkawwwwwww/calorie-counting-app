import { z } from 'zod';

export const dataShema = z.object({
    gender: z.enum(['MALE', 'FEMALE']),
    target: z.enum(['LOSE_WEIGHT', 'MAINTAIN_WEIGHT', 'GAIN_WEIGHT']),
    age: z.number().int().positive(),
    growth: z.number().positive(),
    birthday: z.date(),
    activity: z.enum([
        'SEDENTARY_LIFESTYLE',
        'MODERATE_LIFESTYLE',
        'ACTIVE_LIFESTYLE',
        'HIGHLY_ACTIVE_LIFESTYLE',
    ]),
    weight: z.number().positive(),
});
export const CreateSurveyResponseSchema = z.object({
    response_status: z.number(),
    data: z.object({
        id: z.string(),
        user_id: z.string(),
        created_at: z.string().datetime(),
        updated_at: z.string().datetime(),
        data: dataShema,
    }),
    error: z.null().or(z.string()),
});

export const InputCreateSurveyShema = z.object({
    gender: z
        .enum(['MALE', 'FEMALE'])
        .refine((gender) => gender !== undefined, {
            message: 'Пожалуйста, выберите пол',
        }),
    target: z
        .enum(['LOSE_WEIGHT', 'GAIN_WEIGHT', 'MAINTAIN_WEIGHT'])
        .refine((target) => target !== undefined, {
            message: 'Пожалуйста, выберите цель',
        }),
    age: z
        .number()
        .int()
        .positive()
        .refine((age) => age !== undefined, {
            message: 'Пожалуйста, введите возраст',
        })
        .refine((age) => age > 0, {
            message: 'Возраст должен быть положительным числом',
        }),

    growth: z
        .number()
        .positive()
        .refine((growth) => growth !== undefined, {
            message: 'Пожалуйста, введите рост',
        })
        .refine((growth) => growth > 0, {
            message: 'Рост должен быть положительным числом',
        }),

    birthday: z
        .date()
        .refine((birthday) => birthday !== undefined, {
            message: 'Пожалуйста, введите дату рождения',
        })
        .refine((birthday) => birthday <= new Date(), {
            message: 'Дата рождения должна быть не позднее текущей даты',
        }),

    activity: z
        .enum([
            'SEDENTARY_LIFESTYLE',
            'LIGHT_ACTIVITY',
            'MODERATE_ACTIVITY',
            'HIGH_ACTIVITY',
        ])
        .refine((activity) => activity !== undefined, {
            message: 'Пожалуйста, выберите активность',
        }),
    weight: z
        .number()
        .positive()
        .refine((weight) => weight !== undefined, {
            message: 'Пожалуйста, введите вес',
        })
        .refine((weight) => weight > 0, {
            message: 'Вес должен быть положительным числом',
        }),
});
