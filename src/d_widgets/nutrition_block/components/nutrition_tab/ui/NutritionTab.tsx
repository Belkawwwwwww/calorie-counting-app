import { useCreateFood } from '@/e_features/food/hooks/useGetUserMeal';
import { createFoodScheme } from '@/f_entities/food/model/createFoodSchema';
import React, { FC, useState } from 'react';
import { z } from 'zod';
import { ValidationErrors } from '../config/inputFieldsConfig';
import { InputBox } from '@/g_shared/ui/input';
import { FoodTransition } from '@/g_shared/lib/utils/translation';
import { ToggleButton } from '@/g_shared/ui/toggle_button/ui/ToggleButton';
import { Error } from '@/g_shared/ui/error_display';
import { Button } from '@/g_shared/ui/button';
import { LoadingInBtn } from '@/g_shared/ui/loader';
import {
    CreateContainer,
    MenuContainer,
    MenuSelection,
    OptionBlock,
} from './style';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { Props } from '../type';

export const NutritionTab: FC<Props> = (props) => {
    const [name, setName] = useState<string>('');
    const [isPublic, setIsPublic] = useState<boolean>(false);
    const [products, setProducts] = useState<
        { product_id: string; weight: string }[]
    >([{ product_id: '', weight: '' }]);
    const [info, setInfo] = useState<{
        protein: string;
        fat: string;
        carbs: string;
        calories: string;
    }>({
        protein: '',
        fat: '',
        carbs: '',
        calories: '',
    });
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
        name: '',
        products: [],
        info: {
            protein: '',
            fat: '',
            carbs: '',
            calories: '',
        },
    });

    const { createFood, isLoading } = useCreateFood();
    const handleIsPublicToggle = (value: boolean) => {
        setIsPublic(value);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string
    ) => {
        const { value } = e.target;

        switch (field) {
            case 'name':
                setName(value);
                break;
            case 'isPublic':
                setIsPublic(e.target.checked);
                break;
            case 'protein':
            case 'fat':
            case 'carbs':
            case 'calories':
                setInfo((prev) => ({ ...prev, [field]: value }));
                break;
            case 'product_id':
            case 'weight':
                const index = parseInt(e.target.dataset.index || '0', 10);
                setProducts((prev) => {
                    const newProducts = [...prev];
                    newProducts[index] = {
                        ...newProducts[index],
                        [field]: value,
                    };
                    return newProducts;
                });
                break;
            default:
                break;
        }
    };

    const handleSubmit = async () => {
        const foodData = {
            name,
            is_public: isPublic,
            products: products.map((product) => ({
                product_id: Number(product.product_id),
                weight: Number(product.weight),
            })),
            info: {
                protein: info.protein ? Number(info.protein) : undefined,
                fat: info.fat ? Number(info.fat) : undefined,
                carbs: info.carbs ? Number(info.carbs) : undefined,
                calories: info.calories ? Number(info.calories) : undefined,
            },
        };

        try {
            setValidationErrors({
                name: '',
                products: products.map(() => ({ product_id: '', weight: '' })),
                info: { protein: '', fat: '', carbs: '', calories: '' },
            });

            createFoodScheme.parse(foodData);
            await createFood(foodData).unwrap();
            console.log('Успешно отправлено:', foodData);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const productErrors = products.map((_, index) => ({
                    product_id: '',
                    weight: '',
                }));
                const infoErrors = {
                    protein: '',
                    fat: '',
                    carbs: '',
                    calories: '',
                };

                error.errors.forEach((err) => {
                    if (
                        err.path[0] === 'products' &&
                        err.path[1] !== undefined
                    ) {
                        const productIndex = Number(err.path[1]);
                        if (!isNaN(productIndex)) {
                            // Проверка на NaN
                            const field = err.path[2];
                            if (productIndex < products.length) {
                                if (field === 'product_id') {
                                    (
                                        productErrors[productIndex] as {
                                            product_id: string;
                                            weight: string;
                                        }
                                    ).product_id = err.message;
                                } else if (field === 'weight') {
                                    (
                                        productErrors[productIndex] as {
                                            product_id: string;
                                            weight: string;
                                        }
                                    ).weight = err.message;
                                }
                            }
                        }
                    } else if (
                        err.path[0] === 'info' &&
                        err.path[1] !== undefined
                    ) {
                        const field = err.path[1] as keyof {
                            protein: string;
                            fat: string;
                            carbs: string;
                            calories: string;
                        };
                        infoErrors[field] = err.message;
                    }
                });

                setValidationErrors({
                    name:
                        error.errors.find((err) => err.path[0] === 'name')
                            ?.message || '',
                    products: productErrors,
                    info: infoErrors,
                });
                console.log('errors:', error.errors);
            } else {
                console.error('Возникла ошибка:', error);
            }
        }
    };

    return (
        <MenuContainer>
            <MenuSelection>
                <LinkButton onClick={() => props.handleTabChange('product')}>
                    ДОБАВЛЕНИЕ ПРИЕМА ПИЩИ
                </LinkButton>{' '}
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
                        <InputBox
                            type='text'
                            value={name}
                            onChange={(e) => handleInputChange(e, 'name')}
                            useUnframedInput={true}
                            placeholder='ВВЕДИТЕ НАЗВАНИЕ'
                            label={FoodTransition.name}
                            id={name}
                            error={validationErrors.name}
                        />
                        {products.map((product, index) => (
                            <div key={index}>
                                <InputBox
                                    type='number'
                                    data-index={index}
                                    value={product.product_id}
                                    onChange={(e) =>
                                        handleInputChange(e, 'product_id')
                                    }
                                    useUnframedInput={true}
                                    placeholder='ОБЯЗАТЕЛЬНО'
                                    id={`product_id_${index}`}
                                    label={FoodTransition.product_id}
                                    error={
                                        validationErrors.products?.[index]
                                            ?.product_id
                                    }
                                />
                                <InputBox
                                    type='number'
                                    data-index={index}
                                    value={product.weight}
                                    onChange={(e) =>
                                        handleInputChange(e, 'weight')
                                    }
                                    useUnframedInput={true}
                                    placeholder='НЕОБЯЗАТЕЛЬНО'
                                    id={`weight_${index}`}
                                    label={FoodTransition.weight}
                                    error={
                                        validationErrors.products?.[index]
                                            ?.weight
                                    }
                                />
                            </div>
                        ))}
                        <InputBox
                            type='number'
                            value={info.protein}
                            onChange={(e) => handleInputChange(e, 'protein')}
                            useUnframedInput={true}
                            placeholder='НЕОБЯЗАТЕЛЬНО'
                            label={FoodTransition.protein}
                            error={validationErrors.info?.protein}
                        />
                        <InputBox
                            type='number'
                            value={info.fat}
                            onChange={(e) => handleInputChange(e, 'fat')}
                            useUnframedInput={true}
                            placeholder='НЕОБЯЗАТЕЛЬНО'
                            label={FoodTransition.fat}
                            error={validationErrors.info?.fat}
                        />
                        <InputBox
                            type='number'
                            value={info.carbs}
                            onChange={(e) => handleInputChange(e, 'carbs')}
                            useUnframedInput={true}
                            placeholder='НЕОБЯЗАТЕЛЬНО'
                            label={FoodTransition.carbs}
                            error={validationErrors.info?.carbs}
                        />
                        <InputBox
                            type='number'
                            value={info.calories}
                            onChange={(e) => handleInputChange(e, 'calories')}
                            useUnframedInput={true}
                            placeholder='НЕОБЯЗАТЕЛЬНО'
                            label={FoodTransition.calories}
                            error={validationErrors.info?.calories}
                        />
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
