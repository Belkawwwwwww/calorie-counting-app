import { z } from 'zod';

interface ProductError {
    product_id: string;
    weight: string;
}

interface InfoError {
    protein: string;
    fat: string;
    carbs: string;
    calories: string;
}

export const processZodErrors = (
    error: z.ZodError,
    products: any[],
    dispatch: any
) => {
    const productErrors: ProductError[] = products.map(() => ({
        product_id: '',
        weight: '',
    }));
    const infoErrors: InfoError = {
        protein: '',
        fat: '',
        carbs: '',
        calories: '',
    };

    error.errors.forEach((err) => {
        if (err.path[0] === 'products' && err.path[1] !== undefined) {
            const productIndex = Number(err.path[1]);
            if (!isNaN(productIndex) && productIndex < products.length) {
                const field = err.path[2];
                if (field === 'product_id' || field === 'weight') {
                    (productErrors[productIndex] as any)[field] = err.message; // Используйте as any или более точный тип
                }
            }
        } else if (err.path[0] === 'info' && err.path[1] !== undefined) {
            const field = err.path[1] as keyof InfoError;
            infoErrors[field] = err.message;
        }
    });

    dispatch({
        type: 'SET_VALIDATION_ERRORS',
        payload: {
            name:
                error.errors.find((err) => err.path[0] === 'name')?.message ||
                '',
            products: productErrors,
            info: infoErrors,
        },
    });
    console.log('errors:', error.errors);
};
