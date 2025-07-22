import { useZodInputValidation } from '@/g_shared/lib/hooks';
import { FoodTransition } from '@/g_shared/lib/utils';
import { WeightSchema } from '@/g_shared/schema/createOrUpdateMealSchema';
import { AddButton } from '@/g_shared/ui/add_meal_button';
import { InputBox } from '@/g_shared/ui/input';
import { NutritionTitle } from '@/g_shared/ui/nutrient_title';
import { FC, useMemo } from 'react';
import { Props } from '../type';
import { calculateNutritionData } from '../utils/calculateNutrition';
import { NameItem } from './style';
import { useWeightValidation } from '@/e_features/create_or_update_meal/hooks';


export const FoodBlocks: FC<Props> = (props) => {
    const { inputValue: weight, handleInputChange } = useZodInputValidation(WeightSchema.shape.weight)
    const { validationErrors, validateWeight } = useWeightValidation(WeightSchema);
    const isWeightEntered = !!weight;

    const handleInputChangeWithValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e);
        validateWeight(e.target.value);
    };
    const calculatedNutrition = useMemo(() => {
        if (props.item && weight && !validationErrors.weight) {
            const weightValue = Number(weight);
            return calculateNutritionData(props.item, weightValue);
        }
        return null;
    }, [props.item, weight, validationErrors, calculateNutritionData]);

    const handleSubmit = () => {
        if (weight && validateWeight(weight.toString()) && props.item) {
            const weightValue = Number(weight);
            if (props.handleCloseAdditionalModal) {
                props.handleCloseAdditionalModal(props.item, weightValue);
            }
        }
    };

    return (
        <>
            <NameItem>{props.item?.name ?? 'Нет названия'}</NameItem>
            <>
                ПИТАТЕЛЬНЫЕ ВЕЩЕСТВА НА {weight && !validationErrors.weight ? weight : '100'} г :
            </>
            <NutritionTitle
                foodOrProduct={calculatedNutrition || props.item}
            />

            <InputBox
                type='number'
                value={weight || ''}
                onChange={handleInputChangeWithValidation}
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
