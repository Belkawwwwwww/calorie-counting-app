import { z } from 'zod';

type InfoError = {
    protein: string;
    fat: string;
    carbs: string;
    calories: string;
};

export const processZodErrors = (
    error: z.ZodError,
    dispatch: any
) => {
    const infoErrors: InfoError = {
        protein: '',
        fat: '',
        carbs: '',
        calories: '',
    };

    error.errors.forEach((err) => {
        if (err.path[0] === 'info' && err.path[1] !== undefined) {
            const field = err.path[1] as keyof InfoError;
            if (field in infoErrors) { // Проверка что field существует и является ключом InfoError
                infoErrors[field] = err.message;
            }
        }
    });


    dispatch({
        type: 'SET_VALIDATION_ERRORS',
        payload: {
            name:
                error.errors.find((err) => err.path[0] === 'name')?.message ||
                '',
            info: infoErrors,
        },
    });
    console.log('errors:', error.errors);
};
