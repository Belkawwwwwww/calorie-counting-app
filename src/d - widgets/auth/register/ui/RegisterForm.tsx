import React, { useState } from 'react';
import styled from 'styled-components';
import { useRegisterUserMutation } from '@/g - shared/api/authApi';
import { Input } from '@/g - shared/ui/Input';
import { Button } from '@/g - shared/ui/Button';
import { RouteEnum } from '@/g - shared/model/navigation';
import Link from 'next/link';
import {
    RegistrationResponseSchema,
    RegScheme,
} from '@/f - entities/auth/model/registrationSchema';
import { z } from 'zod';
import { useAppDispatch } from '@/g - shared/lib/store';
import { setAuth } from '@/f - entities/redux/session/modele/action/action';
import { OpenRoute } from '@/c - pages/router-providers';
import { setUser } from '@/f - entities/redux/user/model/action/action';
import { useRouter } from 'next/router';
import { LoadingIndicator } from '@/g - shared/ui/Loader/LoadingIndicator';
import { InputBox } from '@/g - shared/ui/Input/InputBox/InputBox';

const StyledRFContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;
const StyledRFInputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-sizing: border-box;
`;
const StyledRFError = styled.div`
    color: red;
`;

const StyledRFLabel = styled.label`
    font-size: 14px;
    color: var(--color-text1);
    margin-top: 10px;
`;
const StyledRFBtn = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const StyledRFFooter = styled.div`
    margin-left: 10px;
    display: flex;
`;
const StyledLink = styled(Link)`
    color: #4689e8;
    text-decoration: none;
    padding-left: 6px;
`;
export const RegisterForm = () => {
    const [registerUser, { isLoading }] = useRegisterUserMutation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: '',
    });
    const [authError, setAuthError] = useState('');

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
            setAuthError('');
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
                    router.push(RouteEnum.MAIN);
                    console.log('Регистрация успешна');
                }
            } else {
                setAuthError('Ошибка при регистрации');
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
                setAuthError('Произошла ошибка при регистрации');
            }
        }
    };

    return (
        <OpenRoute>
            <StyledRFContainer>
                <form onSubmit={handleSubmit}>
                    {authError ? (
                        <StyledRFError>{authError}</StyledRFError>
                    ) : null}
                    <InputBox
                        label='Email'
                        error={validationErrors.username}
                        id='username'
                        type='username'
                        name='username'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputBox
                        label='Пароль'
                        error={validationErrors.password}
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputBox
                        label='Повторите пароль'
                        error={validationErrors.passwordConfirm}
                        id='passwordConfirm'
                        type='password'
                        name='passwordConfirm'
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    <InputBox
                        label='Ваше имя'
                        error={validationErrors.firstName}
                        id='firstName'
                        type='firstName'
                        name='firstName'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputBox
                        label='Ваша фамилия'
                        error={validationErrors.lastName}
                        id='lastName'
                        type='lastName'
                        name='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <StyledRFBtn>
                        <Button
                            $variant='primary'
                            $btnWidth='m'
                            $btnSquareSize='button--square--size-l'
                            type='submit'
                        >
                            {isLoading ? (
                                <LoadingIndicator />
                            ) : (
                                'Зарегистрироваться'
                            )}
                        </Button>
                    </StyledRFBtn>
                </form>
                <StyledRFFooter>
                    <div>Уже есть аккаунт?</div>
                    <StyledLink href={RouteEnum.LOGIN}>Вход</StyledLink>
                </StyledRFFooter>
            </StyledRFContainer>
        </OpenRoute>
    );
};
