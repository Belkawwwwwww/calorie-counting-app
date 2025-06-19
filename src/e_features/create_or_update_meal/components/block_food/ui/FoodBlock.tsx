import { useZodInputValidation } from '@/g_shared/lib/hooks';
import { FoodTransition } from '@/g_shared/lib/utils';
import { WeightSchema } from '@/g_shared/schema/createOrUpdateMealSchema';
import { FC, useEffect, useState } from 'react';
import { NameItem } from './style';
import { Props } from '../type';
import { NutritionTitle } from '@/g_shared/ui/nutrient_title';
import { InputBox } from '@/g_shared/ui/input';
import { AddButton } from '@/g_shared/ui/add_meal_button';
import { FoodOrProduct } from '@/g_shared/lib/type/SearchType';


export const FoodBlocks: FC<Props> = (props) => {
    const { inputValue: weight, handleInputChange } = useZodInputValidation(WeightSchema.shape.weight)
    const [validationErrors, setValidationErrors] = useState({ weight: '' })
    const [calculatedNutrition, setCalculatedNutrition] = useState<FoodOrProduct | null>(null); // Храним расчитанные данные
    const isWeightEntered = !!weight;
    useEffect(() => {
        if (props.item) {
            if (weight && !validationErrors.weight) {
                const weightValue = Number(weight);
                const caloriesPerGram = props.item.calories / 100;
                const proteinPerGram = props.item.protein / 100;
                const fatPerGram = props.item.fat / 100;
                const carbsPerGram = props.item.carbs / 100;

                setCalculatedNutrition({
                    ...props.item,
                    calories: caloriesPerGram * weightValue,
                    protein: proteinPerGram * weightValue,
                    fat: fatPerGram * weightValue,
                    carbs: carbsPerGram * weightValue,
                });
            } else {
                setCalculatedNutrition(null); // Сбрасываем, если вес не введен или есть ошибка
            }
        }
    }, [weight, validationErrors, props.item]);
    const handleSubmit = () => {
        const weightValue = Number(weight)

        const result = WeightSchema.safeParse({ weight: weightValue });

        if (!result.success) {
            const errors = result.error.issues.reduce((acc, issue) => {
                acc[issue.path[0] as keyof typeof validationErrors] = issue.message;
                return acc;
            }, {} as typeof validationErrors);
            setValidationErrors(errors);
        } else {
            setValidationErrors({ weight: '' });
            if (props.handleCloseAdditionalModal && props.item) {
                props.handleCloseAdditionalModal(props.item, weightValue); // Передаем добавленный продукт

            }
        }
    };

    return (
        <>
            <NameItem>{props.item?.name ?? 'Нет названия'}</NameItem>
            {/* <>ПИТАТЕЛЬНЫЕ ВЕЩЕСТВА НА 100 г : </> */}
            <>
                ПИТАТЕЛЬНЫЕ ВЕЩЕСТВА НА {weight && !validationErrors.weight ? weight : '100'} г :
            </>
            {/* <NutritionTitle foodOrProduct={props.item} /> */}
            <NutritionTitle
                foodOrProduct={calculatedNutrition || props.item} // Используем расчитанные или исходные данные
            />

            <InputBox
                type='number'
                value={weight || ''}
                onChange={handleInputChange}
                useUnframedInput={true}
                placeholder='Г'
                label={FoodTransition.weight}
                alwaysShowPlaceholder={true}
                error={validationErrors.weight}
            />
            {isWeightEntered ? <AddButton onClick={handleSubmit} centered={true} $btnWidth='l' /> : null}
        </>
    );
};
