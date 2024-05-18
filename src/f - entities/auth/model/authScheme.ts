import { date, z } from 'zod';

export const AuthResponseScheme = z.object({
    data: z.object({
        id: z.string(),
        created_at: z.string().datetime(),
        updated_at: z.string().datetime(),
        email: z.string().email(),
        first_name: z.string(),
        last_name: z.string(),
        active: z.boolean(),
        is_blocked: z.boolean(),
        blocked_comment: z.nullable(z.string()),
    }),
});

export const AuthScheme = z.object({
    username: z.string().email('Неверный формат email'),
    password: z.string().min(7, 'Пароль должен содержать не менее 7 символов'),
});
