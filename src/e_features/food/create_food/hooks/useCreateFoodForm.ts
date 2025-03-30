import { useCallback, useReducer } from 'react';
import { foodReducer } from '../reducer/createFoodReducer';
import { initialState } from '../reducer/type';
import { createFoodScheme } from '../lib/createFoodSchema';
import { z } from 'zod';
import { CreateFoodInput } from '../type/createFoodTypes';
import { processZodErrors } from '../lib/processZodErrors';
import { formatFoodData } from '../lib/foodDataFormatter';
import { toast } from 'react-toastify';

interface UseFoodFormProps {
    createFood: (data: CreateFoodInput) => any;
    onSuccess?: () => void;
}
export const useFoodForm = ({ createFood, onSuccess }: UseFoodFormProps) => {
    const [state, dispatch] = useReducer(foodReducer, initialState);
    const { name, isPublic, products, info } = state;
    const handleIsPublicToggle = (value: boolean) => {
        dispatch({ type: 'SET_IS_PUBLIC', payload: value });
    };

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
            const { value, dataset, checked, type } = e.target;
            const index = parseInt(dataset.index || '0', 10);
            //объект ключ -назв поля, знач -функ, для этих полей
            const actionMap: { [key: string]: () => void } = {
                name: () => dispatch({ type: 'SET_NAME', payload: value }),
                isPublic: () =>
                    dispatch({ type: 'SET_IS_PUBLIC', payload: checked }),
                protein: () =>
                    dispatch({ type: 'SET_INFO', payload: { field, value } }),
                fat: () =>
                    dispatch({ type: 'SET_INFO', payload: { field, value } }),
                carbs: () =>
                    dispatch({ type: 'SET_INFO', payload: { field, value } }),
                calories: () =>
                    dispatch({ type: 'SET_INFO', payload: { field, value } }),
                product_id: () =>
                    dispatch({
                        type: 'SET_PRODUCT_ID',
                        payload: { index, value },
                    }),
                weight: () =>
                    dispatch({ type: 'SET_WEIGHT', payload: { index, value } }),
            };

            actionMap[field]?.(); // Вызов соответств действия, если оно существует
        },
        [dispatch]
    );

    const handleSubmit = async () => {
        const foodData = formatFoodData({ name, isPublic, products, info });
        try {
            createFoodScheme.parse(foodData);
            await createFood(foodData).unwrap();
            if (onSuccess) {
                onSuccess();
            }
            console.log('Успешно отправлено:', foodData);

            dispatch({ type: 'RESET_VALIDATION_ERRORS' });
            toast.success('ЕДА УСПЕШНО СОЗДАНА', {
                autoClose: 3000,
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                processZodErrors(error, products, dispatch);
            } else {
                console.error('Возникла ошибка:', error);
            }
        }
    };
    return {
        state,
        handleIsPublicToggle,
        handleInputChange,
        handleSubmit,
    };
};
