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
export const LogoutResponseScheme = z.object({
    response_status: z.number(),
    data: z.string(),
    error: z.nullable(z.string()),
});

export const AuthScheme = z.object({
    username: z.string().email('Неверный формат email'),
    password: z.string().min(7, 'Пароль должен содержать не менее 7 символов'),
});
function makePasswordWithConfirm() {
    const schema = z.object({
        password: z
            .string()
            .min(8, 'Пароль должен содержать не менее 8 символов'),
        passwordConfirm: z
            .string()
            .min(8, 'Пароль должен содержать не менее 8 символов'),
    });
    const refineTuple: [
        check: (data: z.infer<typeof schema>) => boolean,
        message: z.CustomErrorParams,
    ] = [
        (data) => data.password === data.passwordConfirm,
        { message: 'Пароли должны совпадать', path: ['passwordConfirm'] },
    ];
    return {
        schema,
        refineTuple,
        errorMessage: 'Passwords must match',
        errorPath: 'passwordConfirm',
    };
}
const passwordWithConfirm = makePasswordWithConfirm();
export const RegScheme = z
    .object({
        username: z.string().email('Неверный формат email'),
        firstName: z
            .string()
            .min(2, 'Имя должно содержать не менее 2 символов'),
        lastName: z
            .string()
            .min(2, 'Фамилия должна содержать не менее 2 символов'),
    })
    .merge(passwordWithConfirm.schema)
    .refine(...passwordWithConfirm.refineTuple);

// export type RegSchemeType = z.infer<typeof RegScheme>;
// export type AuthSchemeType = z.infer<typeof AuthScheme>;
// export type AuthResponseSchemeType = z.infer<typeof AuthResponseScheme>;
