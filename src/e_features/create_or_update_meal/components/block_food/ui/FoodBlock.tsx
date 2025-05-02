import { useZodInputValidation } from '@/g_shared/lib/hooks';
import { FoodTransition } from '@/g_shared/lib/utils';
import { WeightSchema } from '@/g_shared/schema/createOrUpdateMealSchema';
import { FC, useState } from 'react';
import { NameItem } from './style';
import { Props } from '../type';
import { NutritionTitle } from '@/g_shared/ui/nutrient_title';
import { InputBox } from '@/g_shared/ui/input';
import { AddButton } from '@/g_shared/ui/add_meal_button';


export const FoodBlocks: FC<Props> = (props) => {
    const { inputValue: weight, handleInputChange } = useZodInputValidation(WeightSchema.shape.weight)
    const [validationErrors, setValidationErrors] = useState({ weight: '' })
    const isWeightEntered = !!weight;

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
            <>ПИТАТЕЛЬНЫЕ ВЕЩЕСТВА НА 100 г : </>
            <NutritionTitle foodOrProduct={props.item} />

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
            {isWeightEntered && <AddButton onClick={handleSubmit} centered={true} $btnWidth='l' />}
        </>
    );
};
