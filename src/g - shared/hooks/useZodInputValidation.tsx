import { ChangeEvent, useState } from 'react';
import { z } from 'zod';

export const useZodInputValidation = <T extends z.ZodType<any, any, any>>(
    schema: T
) => {
    const [inputValue, setInputValue] = useState<z.infer<T> | undefined>(
        undefined
    );

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value as z.infer<T>);
    };

    return { inputValue, handleInputChange };
};
