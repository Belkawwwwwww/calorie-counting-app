import { useError } from '@/g_shared/lib/context';
import { RouteEnum } from '@/g_shared/model';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { z } from 'zod';
import { RegScheme } from '../validation/authScheme';
import { useRegister } from './useAuthHooks';

export const useRegisterForm = () => {
    const { register, isLoading } = useRegister();
    const [formState, setFormState] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: '',
    });

    const { setError, clearError } = useError();

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
        passwordConfirm: '',
        firstName: '',
        lastName: '',
    });

    const router = useRouter();
    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        },
        []
    );

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        clearError('registration');
        try {
            setValidationErrors({
                username: '',
                password: '',
                passwordConfirm: '',
                firstName: '',
                lastName: '',
            });
            const validatedData = RegScheme.parse(formState);
            await register(validatedData).unwrap();
            await router.push(RouteEnum.MAIN);
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
            } else {
                console.error('Registration failed:', error);
                setError('registration', 'Произошла ошибка при регистрации');
            }
        }
    };
    const handleNavigation = () => {
        clearError('auth');
        router.push(RouteEnum.LOGIN);
    };
    return {
        formState,
        validationErrors,
        handleInputChange,
        handleSubmit,
        handleNavigation,
        isLoading,
    };
};
