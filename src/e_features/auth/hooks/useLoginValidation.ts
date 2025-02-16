import { useState } from 'react';
import { z } from 'zod';

export type ValidationErrors = {
    [key: string]: string;
};

export const useAuthValidations = (validationSchema: z.ZodSchema) => {
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
        {}
    );

    const validate = async (formData: Record<string, any>) => {
        try {
            setValidationErrors({});
            const validatedData = validationSchema.parse(formData);
            return validatedData;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors: ValidationErrors = error.issues.reduce(
                    (acc, issue) => {
                        const key = issue.path[0] as string;
                        acc[key] = issue.message;
                        return acc;
                    },
                    {} as ValidationErrors
                );
                setValidationErrors(errors);
            }
            throw error;
        }
    };

    return {
        validationErrors,
        validate,
    };
};
