import { useError } from '@/g_shared/lib/context';
import { AuthScheme } from '@/e_features/auth/lib/validation/authScheme';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { RouteEnum } from '@/g_shared/model';
import { z } from 'zod';
import { useZodInputValidation } from '@/g_shared/lib/hooks';
import { useAuth } from './useAuthHooks';

export const useLoginForm = () => {
    const { auth, isLoading } = useAuth();
    const { setError, clearError } = useError();
    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: '',
    });
    const { inputValue: email, handleInputChange: handleEmailChange } =
        useZodInputValidation(AuthScheme.shape.username);
    const { inputValue: password, handleInputChange: handlePasswordChange } =
        useZodInputValidation(AuthScheme.shape.password);
    const router = useRouter();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        clearError('auth');
        const form = new FormData(e.currentTarget);
        const formData = Object.fromEntries(form.entries());
        try {
            setValidationErrors({
                username: '',
                password: '',
            });

            const validatedData = AuthScheme.parse(formData);
            await auth(validatedData).unwrap();
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
                setError('auth', 'Произошла ошибка при авторизации');
            }
        }
    };
    const handleNavigation = () => {
        clearError('auth');
        router.push(RouteEnum.REGISTRATION);
    };
    return {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        validationErrors,
        handleSubmit,
        handleNavigation,
        isLoading,
    };
};
