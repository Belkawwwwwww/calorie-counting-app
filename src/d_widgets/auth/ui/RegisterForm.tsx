import React, { useState } from 'react';
import { Button } from '@/g_shared/ui/button';
import { RouteEnum } from '@/g_shared/model';
import { z } from 'zod';
import { useAppDispatch } from '@/g_shared/lib/store';
import { setAuth } from '@/e_features/auth/modele/action/action';
import { setUser } from '@/f_entities/user/model/action/action';
import { useRouter } from 'next/router';
import { InputBox } from '@/g_shared/ui/input';
import { useError } from '@/g_shared/lib/context';
import { Error } from '@/g_shared/ui/errorDisplay';
import { LoadingInBtn } from '@/g_shared/ui/loader';
import { RegScheme } from '@/g_shared/lib/validation/authScheme';
import { Btn, Container, FooterRegister, StyledLink } from './style';
import { OpenRoute } from '../../../e_features/auth/ui/OpenRoute';
import { useRegister } from '@/e_features/auth';
import { useAuthValidations } from '@/e_features/auth/hooks/useLoginValidation';

export const RegisterForm = () => {
    const { register, isLoading } = useRegister();
    // const { validationErrors, validate } = useAuthValidations(Re);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { setError, clearError } = useError();

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: '',
    });

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        clearError('registration');
        const form = new FormData(e.currentTarget);
        const formData = Object.fromEntries(form.entries());
        console.log('Данные формы перед валидацией:', formData);
        try {
            setValidationErrors({
                username: '',
                password: '',
                passwordConfirm: '',
                firstName: '',
                lastName: '',
            });
            const validatedData = RegScheme.parse(formData); // Валидация входных данных с помощью RegScheme
            const response = await register(validatedData).unwrap();
            const backendUser_id = response.data.id;
            dispatch(setAuth(true));
            dispatch(setUser({ user_id: backendUser_id }));
            console.log(register);
            console.log('Регистрация успешна');
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
                console.error('Registration failed:', error);
                setError('registration', 'Произошла ошибка при регистрации');
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
            value: email,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value),
        },
        {
            label: 'Пароль',
            error: validationErrors.password,
            type: 'password',
            id: 'password',
            name: 'password',
            value: password,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value),
        },
        {
            label: 'Повторите пароль',
            error: validationErrors.passwordConfirm,
            id: 'passwordConfirm',
            type: 'password',
            name: 'passwordConfirm',
            value: passwordConfirm,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordConfirm(e.target.value),
        },
        {
            label: 'Ваше имя',
            error: validationErrors.firstName,
            id: 'firstName',
            type: 'firstName',
            name: 'firstName',
            value: firstName,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value),
        },
        {
            label: 'Ваша фамилия',
            error: validationErrors.lastName,
            id: 'lastName',
            type: 'lastName',
            name: 'lastName',
            value: lastName,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value),
        },
    ];
    const handleNavigation = () => {
        clearError('auth');
        router.push(RouteEnum.LOGIN);
    };

    return (
        <OpenRoute>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Error keyName='registration' />
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
                            $btnWidth='m'
                            $btnSquareSize='button--square--size-m'
                            type='submit'
                        >
                            {isLoading ? (
                                <LoadingInBtn />
                            ) : (
                                'Зарегистрироваться'
                            )}
                        </Button>
                    </Btn>
                </form>
                <FooterRegister>
                    <div>Уже есть аккаунт?</div>
                    <StyledLink onClick={handleNavigation}>Вход</StyledLink>
                </FooterRegister>
            </Container>
        </OpenRoute>
    );
};
