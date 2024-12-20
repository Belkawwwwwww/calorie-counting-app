import React, { useState } from 'react';
import { useRegisterUserMutation } from '@/g - shared/api/authApi';
import { Button } from '@/g - shared/ui/button';
import { RouteEnum } from '@/g - shared/model';
import {
    RegistrationResponseSchema,
    RegScheme,
} from '@/d - widgets/auth/register/model/registrationSchema';
import { z } from 'zod';
import { useAppDispatch } from '@/g - shared/lib/store';
import { setAuth } from '@/f - entities/redux/session/modele/action/action';
import { OpenRoute } from '@/c - pages/router-providers';
import { setUser } from '@/f - entities/redux/user/model/action/action';
import { useRouter } from 'next/router';
import { InputBox } from '@/g - shared/ui/input';
import { useError } from '@/g - shared/lib/context';
import { Error } from '@/g - shared/ui/errorDisplay';
import { LoadingInBtn } from '@/g - shared/ui/loader';
import { Btn, Container, Footer, StyledLink } from '../style/Styles';

export const RegisterForm = () => {
    const [registerUser, { isLoading }] = useRegisterUserMutation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { setError } = useError();

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: '',
    });

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
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
            setError('');
            const validatedData = RegScheme.parse(formData); // Валидация входных данных с помощью RegScheme
            const response = await registerUser(validatedData).unwrap();
            if (response.response_status === 0) {
                const validatedResponse =
                    RegistrationResponseSchema.parse(response);
                const backendUser_id = response.data.id;
                if (validatedResponse) {
                    dispatch(setAuth(true));
                    dispatch(setUser({ user_id: backendUser_id }));
                    console.log(registerUser);
                    console.log('Регистрация успешна');
                }
            } else {
                setError('Ошибка при регистрации');
                console.log(response);
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
                console.log('Ошибка валидации:', errors);
            } else {
                console.error('Registration failed:', error);
                setError('Произошла ошибка при регистрации');
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
                            $btnWidth='m'
                            $btnSquareSize='button--square--size-l'
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
                <Footer>
                    <div>Уже есть аккаунт?</div>
                    <StyledLink href={RouteEnum.LOGIN}>Вход</StyledLink>
                </Footer>
            </Container>
        </OpenRoute>
    );
};
