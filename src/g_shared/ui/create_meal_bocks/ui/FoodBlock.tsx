import { FoodBlock, MealValidationErrors } from '@/g_shared/lib/type/createOrUpdateTypes';
import { FoodOrProduct } from '@/g_shared/lib/type/SearchType';

import { FC } from 'react';
import styled from 'styled-components';
import { InputBox } from '../../input';
import { FoodTransition } from '@/g_shared/lib/utils';
import { NutritionTitle } from '../../nutrient_title';
import { MealType } from '@/g_shared/lib/type/nutritionTypes';
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
    item: FoodOrProduct | null
    mealType: MealType
    // index: number;
    // foodBlock: FoodBlock;
    // updateFoodBlock: (
    //     index: number,
    //     key: keyof FoodBlock,
    //     value: string
    // ) => void;
    // validationErrors?: MealValidationErrors;
    // mealTypeOptions: { value: string; label: string }[];
    // handleRemoveFoodBlock: (index: number) => void;
};
export const FoodBlocks: FC<Props> = (props) => {
    const useItemData = () => {
        return[
            
        ]
    }
    return (
        <>
            Название: {props.item?.name}
            {/* <NutritionTitle mealType={props.item} /> */}
            <div>


                Калории: {props.item?.calories}
                Белки: {props.item?.protein}
                Углеводы: {props.item?.carbs}
                Жиры: {props.item?.fat}

            </div>
            {/* <InputBox
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
            /> */}
            {/* <ToggleButton
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
            /> */}
        </>
    );
};
