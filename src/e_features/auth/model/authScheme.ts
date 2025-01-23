import { z } from 'zod';

export const AuthResponseScheme = z.object({
    response_status: z.number(),
    data: z.object({
        id: z.number(),
        created_at: z.string().datetime(),
        updated_at: z.string().datetime(),
        deleted_at: z.nullable(z.string().datetime()),
        username: z.string().email(),
        email_confirm: z.boolean(),
        is_active: z.boolean(),
        first_name: z.string(),
        last_name: z.string(),
    }),
});

export const AuthScheme = z.object({
    username: z.string().email('Неверный формат email'),
    password: z.string().min(7, 'Пароль должен содержать не менее 7 символов'),
});
