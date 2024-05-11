import { z } from 'zod';
const GenericStringContraint = z.string().min(1).max(18)
export const RegistrationDataSchema = z.object({
    username: z.string().email('Неверный формат электронной почты'),
    password: z.string().min(8, 'Пароль должен содержать не менее 8 символов'),
    passwordConfirm: z.string(),
    // passwordConfirm: z.string().refine((val) => val === data.password, {
    //     message: 'Пароли не совпадают',
    //     path: ['passwordConfirm'], // устанавливает путь ошибки
    // }),

    firstName: GenericStringContraint,
    lastName: GenericStringContraint,

});
export type RegScheme = z.infer<typeof RegistrationDataSchema>;

