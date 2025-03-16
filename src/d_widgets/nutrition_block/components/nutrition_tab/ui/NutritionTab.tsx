import { FC, useReducer, useState } from 'react';
import { Props } from '../type';
import {
    CreateContainer,
    MenuContainer,
    MenuSelection,
    OptionBlock,
} from './style';
import { createFoodScheme } from '@/f_entities/food/model/createFoodSchema';
import { useCreateFood } from '@/e_features/food/hooks/useGetUserMeal';
import { z } from 'zod';
import { useError } from '@/g_shared/lib/context';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { InputBox } from '@/g_shared/ui/input';
import { Error } from '@/g_shared/ui/error_display';
import { Button } from '@/g_shared/ui/button';
import { ToggleButton } from '@/g_shared/ui/toggle_button/ui/ToggleButton';
import { inputFields } from '../config/inputFieldsConfig';
import { LoadingInBtn } from '@/g_shared/ui/loader';
import { reducer } from '@/e_features/food/reducer/createFoodReducer';
import { initialState } from '@/e_features/food/reducer/type';
import { CreateFoodInfo } from '@/f_entities/food/type';

export const NutritionTab: FC<Props> = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { createFoodInfo } = state;
    const { createFood, isLoading } = useCreateFood();
    const [isPublic, setIsPublic] = useState<boolean>(false);
    const { setError, clearError } = useError();
    const [validationErrors, setValidationErrors] = useState<
        Record<string, string>
    >({
        name: '',
        product_id: '',
        weight: '',
        protein: '',
        fat: '',
        carbs: '',
        calories: '',
    });

    const handleInputChange = (
        name: keyof CreateFoodInfo,
        value: string,
        schema: z.ZodType<any, any>
    ) => {
        setValidationErrors((prev) => ({ ...prev, [name]: '' }));

        if (
            [
                'weight',
                'product_id',
                'protein',
                'fat',
                'carbs',
                'calories',
            ].includes(name)
        ) {
            if (value.trim() === '') {
                dispatch({
                    type: 'SET_CREATE_FOOD_INFO',
                    key: name,
                    value: '',
                });
                return;
            }

            const numericValue = Number(value);
            if (isNaN(numericValue)) {
                setValidationErrors((prev) => ({
                    ...prev,
                    [name]: 'Пожалуйста, введите число',
                }));
                return;
            }
            try {
                schema.parse(numericValue);
                setValidationErrors((prev) => ({ ...prev, [name]: '' }));
                dispatch({
                    type: 'SET_CREATE_FOOD_INFO',
                    key: name,
                    value: numericValue,
                });
            } catch (error) {
                if (error instanceof z.ZodError) {
                    setValidationErrors((prev) => ({
                        ...prev,
                        [name]: error.errors[0].message,
                    }));
                }
            }
        } else {
            dispatch({ type: 'SET_CREATE_FOOD_INFO', key: name, value });
        }
    };

    const handleSubmit = async () => {
        clearError('createFood');

        const foodData = {
            name: String(createFoodInfo.name),
            is_public: isPublic,
            products: [
                {
                    product_id: Number(createFoodInfo.product_id),
                    weight: Number(createFoodInfo.weight),
                },
            ],
            info: {
                protein: createFoodInfo.protein
                    ? Number(createFoodInfo.protein)
                    : undefined,
                fat: createFoodInfo.fat
                    ? Number(createFoodInfo.fat)
                    : undefined,
                carbs: createFoodInfo.carbs
                    ? Number(createFoodInfo.carbs)
                    : undefined,
                calories: createFoodInfo.calories
                    ? Number(createFoodInfo.calories)
                    : undefined,
            },
        };

        try {
            // Проверяем данные с помощью схемы
            createFoodScheme.parse(foodData);
            const response = await createFood(foodData).unwrap();
            console.log(foodData, response);
            setValidationErrors({
                name: '',
                product_id: '',
                weight: '',
                protein: '',
                fat: '',
                carbs: '',
                calories: '',
            });
        } catch (error) {
            if (error instanceof z.ZodError) {
                // При наличии ошибок валидации, фиксируем их в validationErrors
                const errors = error.issues.reduce(
                    (acc, issue) => {
                        acc[issue.path[0] as keyof typeof validationErrors] =
                            issue.message;
                        return acc;
                    },
                    {} as typeof validationErrors
                );
                setValidationErrors(errors);
                console.log('Ошибка валидации:', errors);
            } else {
                console.error('Ошибка:', error);
                setError('createFood', 'Произошла ошибка при создании.');
            }
        }
    };
    const handleIsPublicToggle = (value: boolean) => {
        setIsPublic(value);
    };

    const fields = inputFields(
        createFoodInfo.name,
        createFoodInfo.product_id,
        createFoodInfo.weight,
        createFoodInfo.protein,
        createFoodInfo.fat,
        createFoodInfo.carbs,
        createFoodInfo.calories,
        validationErrors
    );

    return (
        <MenuContainer>
            <MenuSelection>
                <LinkButton onClick={() => props.handleTabChange('product')}>
                    ДОБАВЛЕНИЕ ПРИЕМА ПИЩИ
                </LinkButton>
                |
                <LinkButton onClick={() => props.handleTabChange('food')}>
                    СОЗДАНИЕ ЕДЫ
                </LinkButton>
            </MenuSelection>
            <>
                {props.activeTab === 'product' ? (
                    <>
                        <OptionBlock>
                            <>ПРОДУКТ</>
                            <>БЛЮДО</>
                        </OptionBlock>
                        <>
                            <>ДАТА: {props.data}</>
                            <>ID: </>
                            <>ВЕС: </>
                        </>
                    </>
                ) : null}
                {props.activeTab === 'food' ? (
                    <CreateContainer>
                        {fields.map(
                            ({
                                id,
                                type,
                                label,
                                value,
                                placeholder,
                                validationSchema,
                                error,
                            }) => (
                                <InputBox
                                    key={id}
                                    type={type}
                                    id={id}
                                    label={label}
                                    value={value}
                                    placeholder={placeholder}
                                    onChange={(e) =>
                                        handleInputChange(
                                            id,
                                            e.target.value,
                                            validationSchema
                                        )
                                    }
                                    useUnframedInput={true}
                                    error={error}
                                />
                            )
                        )}

                        <ToggleButton
                            isPublic={isPublic}
                            onToggle={handleIsPublicToggle}
                        />
                        <Error keyName='createFood' />
                        <Button
                            $variant='primary'
                            $btnWidth='s'
                            $btnSquareSize='button--square--size-m'
                            type='button'
                            onClick={handleSubmit}
                        >
                            {isLoading ? <LoadingInBtn /> : 'СОЗДАТЬ'}
                        </Button>
                    </CreateContainer>
                ) : null}
            </>
        </MenuContainer>
    );
};
