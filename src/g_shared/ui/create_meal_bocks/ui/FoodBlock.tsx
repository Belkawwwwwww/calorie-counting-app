import {
    FoodBlock,
    MealValidationErrors,
} from '@/g_shared/lib/type/createOrUpdateTypes';
import { FoodTransition } from '@/g_shared/lib/utils';
import { mealTypeOptions } from '@/g_shared/lib/utils';
import { InputBox } from '@/g_shared/ui/input';
import { ToggleButton } from '@/g_shared/ui/toggle_button';
import { FC } from 'react';
import styled from 'styled-components';
export const Food = styled.div`
    border: 1px solid #89ac76;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 35px;
`;
export const Remove = styled.div`
    float: right;
`;
type Props = {
    index: number;
    foodBlock: FoodBlock;
    updateFoodBlock: (
        index: number,
        key: keyof FoodBlock,
        value: string
    ) => void;
    validationErrors?: MealValidationErrors;
    mealTypeOptions: { value: string; label: string }[];
    handleRemoveFoodBlock: (index: number) => void;
};
export const FoodBlocks: FC<Props> = (props) => {
    return (
        <>
            <InputBox
                type='number'
                value={props.foodBlock.id}
                onChange={(e) =>
                    props.updateFoodBlock(props.index, 'id', e.target.value)
                }
                useUnframedInput={true}
                placeholder='ОБЯЗАТЕЛЬНО'
                label='ID'
                error={props.validationErrors?.id}
            />
            <InputBox
                type='number'
                value={props.foodBlock.weight}
                onChange={(e) =>
                    props.updateFoodBlock(props.index, 'weight', e.target.value)
                }
                useUnframedInput={true}
                placeholder='Г'
                label={FoodTransition.weight}
                alwaysShowPlaceholder={true}
                error={props.validationErrors?.weight}
            />
            <ToggleButton
                options={mealTypeOptions.map((option) => option.label)}
                selectedValue={
                    mealTypeOptions.find(
                        (option) => option.value === props.foodBlock.type
                    )?.label || ''
                }
                onToggle={(label) =>
                    props.updateFoodBlock(
                        props.index,
                        'type',
                        mealTypeOptions.find((opt) => opt.label === label)
                            ?.value || ''
                    )
                }
                label='ТИП ПРИЕМА ПИЩИ'
            />
        </>
    );
};
