import { useState, useEffect, ChangeEvent } from 'react';

export const useInputValidation = (validationRegex: RegExp) => {
    const [inputValue, setInputValue] = useState('');
    const [isInputValid, setIsInputValid] = useState(false);

    useEffect(() => {
        const isValid = validationRegex.test(inputValue);
        setIsInputValid(isValid);
    }, [inputValue, validationRegex]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return { inputValue, isInputValid, handleInputChange };
};
