import {
    FoodBlock,
    MealValidationErrors,
} from '@/g_shared/lib/type/createOrUpdateTypes';
import { FC } from 'react';
import { InputBox } from '../../input';
import { ToggleButton } from '../../toggle_button';
import { Food, Remove } from './style';
import { LinkButton } from '../../linkButton';
type Props = {
    foodBlock: FoodBlock;
    index: number;
    totalBlocks: number;
    onUpdate: (index: number, key: keyof FoodBlock, value: string) => void;
    onRemove?: (index: number) => void;
    validationErrors: MealValidationErrors[];
    mealTypeOptions: { value: string; label: string }[];
    lastFoodBlockRef: React.RefObject<HTMLDivElement>;
};

export const FoodBlockItem: FC<Props> = (props) => (
    <Food
        key={props.index}
        ref={
            props.index === props.totalBlocks - 1
                ? props.lastFoodBlockRef
                : null
        }
    >
        <InputBox
            type='number'
            value={props.foodBlock.id}
            onChange={(e) => props.onUpdate(props.index, 'id', e.target.value)}
            useUnframedInput={true}
            placeholder='ОБЯЗАТЕЛЬНО'
            label='ID'
            error={props.validationErrors[props.index]?.id}
        />
        <InputBox
            type='number'
            value={props.foodBlock.weight}
            onChange={(e) =>
                props.onUpdate(props.index, 'weight', e.target.value)
            }
            useUnframedInput={true}
            placeholder='Г'
            label='Вес'
            alwaysShowPlaceholder={true}
            error={props.validationErrors[props.index]?.weight}
        />
        <ToggleButton
            options={props.mealTypeOptions.map((option) => option.label)}
            selectedValue={
                props.mealTypeOptions.find(
                    (option) => option.value === props.foodBlock.type
                )?.label || ''
            }
            onToggle={(label) =>
                props.onUpdate(
                    props.index,
                    'type',
                    props.mealTypeOptions.find((opt) => opt.label === label)
                        ?.value || ''
                )
            }
            label='ТИП ПРИЕМА ПИЩИ'
        />
        {props.onRemove ? (
            <Remove>
                <LinkButton onClick={() => props.onRemove!(props.index)}>
                    Отменить
                </LinkButton>
            </Remove>
        ) : null}
    </Food>
);
