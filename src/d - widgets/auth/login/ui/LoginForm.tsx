import { InputWithRules } from '@/e - features/input-with-rules';
import React, { useState } from 'react';
import styled from 'styled-components';
import { RouteEnum } from '@/g - shared/model/navigation';
import Link from 'next/link';
import { Button } from '@/g - shared/ui/Button';
import { Input } from '@/g - shared/ui/Input';
import { useAuthUserMutation } from '@/g - shared/api/authApi';
import {
    AuthResponseScheme,
    AuthScheme,
} from '@/f - entities/auth/model/authScheme';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '@/f - entities/session/modele/slice/session';
import { z } from 'zod';

const StyledLFContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 450px;
    /* height: 100vh; */
`;
const StyledLFInputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-sizing: border-box;
`;
const StyledLFError = styled.div`
    color: red;
`;
const StyledLFLabel = styled.label`
    font-size: 14px;
    color: var(--color-text1);
    margin-top: 20px;
`;
const StyledLFBtn = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;
const StyledPasswordRecovery = styled.div`
    margin-left: 20px;
    color: #4689e8;
    cursor: pointer;
`;
const StyledLFFooter = styled.div`
    display: flex;
`;
const StyledLink = styled(Link)`
    color: #4689e8;
    text-decoration: none;
    padding-left: 6px;
`;

export const LoginForm = () => {
    const [authUser, { isLoading, error }] = useAuthUserMutation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
    });
    const dispatch = useDispatch();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const formData = Object.fromEntries(form.entries());
        console.log('Form data before validation:', formData);
        try {
            setValidationErrors({
                username: '',
                password: '',
            });
            const validatedData = AuthScheme.parse(formData);
            const response = await authUser(validatedData).unwrap();
            const validatedResponse = AuthResponseScheme.parse(response);
            console.log('Validated response:', validatedResponse);
            dispatch(setAuthenticated(true));
            sessionStorage.setItem('isAuth', 'true');
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
                console.log('Validation errors:', errors);
            } else {
                console.error('Registration failed:', error);
            }
        }
    };
    return (
        <StyledLFContainer>
            <form onSubmit={handleSubmit}>
                <StyledLFInputBox>
                    <StyledLFLabel htmlFor="email">Email</StyledLFLabel>
                    <Input
                        name="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {validationErrors.username && (
                        <StyledLFError>
                            {validationErrors.username}
                        </StyledLFError>
                    )}
                    <StyledLFLabel htmlFor="password">Пароль</StyledLFLabel>
                    <Input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {validationErrors.password && (
                        <StyledLFError>
                            {validationErrors.password}
                        </StyledLFError>
                    )}
                </StyledLFInputBox>
                <StyledLFBtn>
                    <Button
                        $variant="primary"
                        $btnWidth="s"
                        $btnSquareSize="button--square--size-m"
                        onClick={() => console.log('Clicked!')}
                        type="submit"
                    >
                        Войти
                    </Button>
                    <StyledPasswordRecovery>
                        Восстановление пароля
                    </StyledPasswordRecovery>
                </StyledLFBtn>
            </form>

            <StyledLFFooter>
                <div>Еще не зарегистрированы?</div>
                <StyledLink href={RouteEnum.REGISTRATION}>
                    Регистрация
                </StyledLink>
            </StyledLFFooter>
        </StyledLFContainer>
    );
};
