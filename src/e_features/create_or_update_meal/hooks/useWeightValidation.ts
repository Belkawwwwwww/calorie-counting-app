import { useCallback, useState } from "react";
import { ZodSchema } from "zod";

type UseWeightValidationResult = {
    validationErrors: { weight: string };
    validateWeight: (value: string) => boolean;
}

export const useWeightValidation = (WeightSchema: ZodSchema<{ weight: number }>): UseWeightValidationResult => {
    const [validationErrors, setValidationErrors] = useState({ weight: '' })
    const validateWeight = useCallback((value: string) => {
        const weightValue = Number(value);
        const safeParseResult = WeightSchema.safeParse({ weight: weightValue });

        if (safeParseResult.success) {
            setValidationErrors({ weight: '' });
            return true;
        } else {
            const errors = safeParseResult.error.issues.reduce((acc, issue) => {
                acc[issue.path[0] as keyof typeof validationErrors] = issue.message;
                return acc;
            }, {} as typeof validationErrors);
            setValidationErrors(errors);
            return false;
        }
    }, [WeightSchema]);
    return { validationErrors, validateWeight };
}