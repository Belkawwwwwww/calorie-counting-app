import React, { useState } from 'react';
import { RouteEnum } from '@/g_shared/model';
import { Button } from '@/g_shared/ui/button';
import {
    AuthResponseScheme,
    AuthScheme,
} from '@/e_features/auth/model/authScheme';
import { z } from 'zod';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/g_shared/lib/store';
import { setAuth } from '@/f_entities/redux/session/modele/action/action';
import { setUser } from '@/f_entities/redux/user/model/action/action';
import { OpenRoute } from '@/c_pages/router_providers';
import { useZodInputValidation } from '@/g_shared/hooks';
import { LoadingInBtn } from '@/g_shared/ui/loader';
import { InputBox } from '@/g_shared/ui/input';
import { Error } from '@/g_shared/ui/errorDisplay';
import { useError } from '@/g_shared/lib/context';
import {
    Btn,
    Container,
    Footer,
    PasswordRecovery,
    StyledLink,
    Text,
} from '../style';
import { useAuth } from '@/e_features/auth/hooks/authHooks';

export const LoginForm = () => {
    const { auth, isLoading } = useAuth();
    const { inputValue: email, handleInputChange: handleEmailChange } =
        useZodInputValidation(AuthScheme.shape.username);
    const { inputValue: password, handleInputChange: handlePasswordChange } =
        useZodInputValidation(AuthScheme.shape.password);

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
    });
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { setError } = useError();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const formData = Object.fromEntries(form.entries());
        console.log('Данные формы перед валидацией:', formData);
        try {
            setValidationErrors({
                username: '',
                password: '',
            });
            setError('');
            const validatedData = AuthScheme.parse(formData);
            if (auth) {
                const response = await auth(validatedData).unwrap();
                if (response?.response_status === 0) {
                    const validatedResponse =
                        AuthResponseScheme.parse(response);
                    const backendUser_id = response?.data?.id;
                    if (validatedResponse) {
                        dispatch(setAuth(true));
                        dispatch(setUser({ user_id: backendUser_id }));
                        await router.push(RouteEnum.MAIN);
                        console.log('Авторизация успешна');
                    }
                } else {
                    setError('Неправильный логин или пароль');
                    console.log(response);
                }
            } else {
                console.error(
                    'Ошибка регистрации: authUser is null or undefined'
                );
                setError('Произошла ошибка при авторизации');
            }
        } catch (error: unknown | z.ZodError) {
            if (error instanceof z.ZodError) {
                const errors = error.issues.reduce(
                    (acc: typeof validationErrors, issue: z.ZodIssue) => {
                        acc[issue.path[0] as keyof typeof validationErrors] =
                            issue.message;
                        return acc;
                    },
                    {} as typeof validationErrors
                );
                setValidationErrors(errors);
                console.log('Ошибки валидации:', errors);
            } else {
                console.error('Ошибка регистрации:', error);
                setError('Произошла ошибка при авторизации');
            }
        }
    };

    const formFields = [
        {
            label: 'Email',
            error: validationErrors.username,
            id: 'username',
            type: 'username',
            name: 'username',
            value: email || '',
            onChange: handleEmailChange,
        },
        {
            label: 'Пароль',
            error: validationErrors.password,
            type: 'password',
            id: 'password',
            name: 'password',
            value: password || '',
            onChange: handlePasswordChange,
        },
    ];

    return (
        <OpenRoute>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Error />
                    {formFields.map(
                        ({ label, error, id, type, name, value, onChange }) => (
                            <InputBox
                                key={id}
                                label={label}
                                error={error}
                                id={id}
                                type={type}
                                name={name}
                                value={value}
                                onChange={onChange}
                            />
                        )
                    )}
                    <Btn>
                        <Button
                            $variant='primary'
                            $btnWidth='s'
                            $btnSquareSize='button--square--size-m'
                            type='submit'
                            disabled={isLoading}
                        >
                            {isLoading ? <LoadingInBtn /> : 'Войти'}
                        </Button>
                        <PasswordRecovery>
                            Восстановление пароля
                        </PasswordRecovery>
                    </Btn>
                </form>

                <Footer>
                    <Text>Еще не зарегистрированы?</Text>
                    <StyledLink href={RouteEnum.REGISTRATION}>
                        Регистрация
                    </StyledLink>
                </Footer>
            </Container>
        </OpenRoute>
    );
};