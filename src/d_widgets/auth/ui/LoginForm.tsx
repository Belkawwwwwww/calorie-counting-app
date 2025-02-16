import React, { useState } from 'react';
import { RouteEnum } from '@/g_shared/model';
import { Button } from '@/g_shared/ui/button';
import { AuthScheme } from '@/g_shared/lib/validation/authScheme';
import { z } from 'zod';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/g_shared/lib/store';
import { setAuth } from '@/e_features/auth/modele/action/action';
import { setUser } from '@/f_entities/user/model/action/action';
import { useZodInputValidation } from '@/g_shared/lib/hooks';
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
} from './style';
import { OpenRoute } from '../../../e_features/auth/ui/OpenRoute';
import { useAuth } from '@/e_features/auth';

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
    const { setError, clearError } = useError();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        clearError('auth');
        const form = new FormData(e.currentTarget);
        const formData = Object.fromEntries(form.entries());
        console.log('Данные формы перед валидацией:', formData);
        try {
            setValidationErrors({
                username: '',
                password: '',
            });
            const validatedData = AuthScheme.parse(formData);
            const response = await auth(validatedData).unwrap();
            const backendUser_id = response?.data?.id;
            dispatch(setAuth(true));
            dispatch(setUser({ user_id: backendUser_id }));
            await router.push(RouteEnum.MAIN);
            console.log('Авторизация успешна');
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors = error.issues.reduce(
                    (acc, issue) => {
                        acc[issue.path[0] as keyof typeof validationErrors] =
                            issue.message;
                        return acc;
                    },
                    {} as typeof validationErrors
                );
                setValidationErrors(errors);
                console.log('Ошибка валидации:', errors);
            } else {
                console.error('Authtorization failed:', error);
                setError('auth', 'Произошла ошибка при авторизации');
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
    const handleNavigation = () => {
        clearError('auth');
        router.push(RouteEnum.REGISTRATION);
    };

    return (
        <OpenRoute>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Error keyName='auth' />
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
                    <StyledLink onClick={handleNavigation}>
                        Регистрация
                    </StyledLink>
                </Footer>
            </Container>
        </OpenRoute>
    );
};
