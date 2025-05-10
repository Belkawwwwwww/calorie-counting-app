import { useError } from '@/g_shared/lib/context';
import { useCallback, useReducer } from 'react';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { createFoodScheme } from '../lib/createFoodSchema';
import { formatFoodData } from '../lib/foodDataFormatter';
import { processZodErrors } from '../lib/processZodErrors';
import { FoodAction } from '../reducer/action/foodAction';
import { foodReducer } from '../reducer/createFoodReducer';
import { initialState } from '../reducer/type';
import { CreateFoodInput } from '../type/createFoodTypes';
import { AddedItemsCreateFood, Product } from '../../../g_shared/lib/type/foodType';

interface UseFoodFormProps {
    createFood: (data: CreateFoodInput) => any;
    onSuccess?: () => void;
    addedItems: AddedItemsCreateFood[];
}
export const useFoodForm = ({ createFood, onSuccess, addedItems }: UseFoodFormProps) => {
    const { setError, clearError } = useError();
    const [state, dispatch] = useReducer(foodReducer, initialState);
    const { name, isPublic, info } = state;
    const handleIsPublicToggle = (value: boolean) => {
        dispatch({ type: 'SET_IS_PUBLIC', payload: value });
    };

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const { value, checked } = e.target;

        const parsedValue = field === 'protein' || field === 'fat' || field === 'carbs' || field === 'calories'
            ? (isNaN(Number(value)) ? "" : Number(value).toString())
            : value;

        const action: FoodAction = (() => {
            switch (field) {
                case 'name':
                    return { type: 'SET_NAME', payload: value };
                case 'isPublic':
                    return { type: 'SET_IS_PUBLIC', payload: checked };
                case 'protein':
                case 'fat':
                case 'carbs':
                case 'calories':
                    return { type: 'SET_INFO', payload: { field, value: parsedValue.toString() } };
                default:
                    console.warn(`Unknown field: ${field}`);
                    return { type: 'SET_NAME', payload: '' };
            }
        })();
        dispatch(action);
    }, [dispatch]);

    const handleSubmit = async () => {
        clearError('CreateFood')
        const productsForBackend: Product[] = addedItems.map((item) => ({
            product_id: item.item.id,
            weight: Number(item.weight)
        }));

        const foodData: CreateFoodInput = formatFoodData({
            name,
            isPublic,
            products: productsForBackend,
            info: {
                protein: Number(info.protein),
                fat: Number(info.fat),
                carbs: Number(info.carbs),
                calories: Number(info.calories)
            }
        });

        try {
            const validatedData = createFoodScheme.parse(foodData);
            createFoodScheme.parse(validatedData);
            await createFood(foodData).unwrap();
            if (onSuccess) {
                onSuccess();
            }
            dispatch({ type: 'RESET_VALIDATION_ERRORS' });
            toast.success(`БЛЮДО ${state.name.toUpperCase()} УСПЕШНО СОЗДАНО`, {
                autoClose: 3000,
            });
        } catch (error) {

            if (error instanceof z.ZodError) {
                processZodErrors(error, dispatch);
            } else {
                setError('createFood', 'Произошла ошибка при создании блюда')
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
