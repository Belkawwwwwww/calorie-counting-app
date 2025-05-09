import { FoodTransition } from '@/g_shared/lib/utils';
import { InputBox } from '../../input';
import { ChangeEvent, FC } from 'react';
import { Props } from '../type/type';

export const InfoInput: FC<Props> = (props) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
        if (props.handleInputChange) {
            props.handleInputChange(e, field);
        }
    };
    return (
        <>
            <InputBox
                type='number'
                value={props.info.protein}
                onChange={(e) => handleChange(e, 'protein')}
                useUnframedInput={true}
                placeholder='НЕОБЯЗАТЕЛЬНО'
                label={FoodTransition.protein}
                error={props.validationErrors?.info?.protein} />
            <InputBox
                type='number'
                value={props.info.fat}
                onChange={(e) => handleChange(e, 'fat')}
                useUnframedInput={true}
                placeholder='НЕОБЯЗАТЕЛЬНО'
                label={FoodTransition.fat}
                error={props.validationErrors?.info?.fat}
            />
            <InputBox
                type='number'
                value={props.info.carbs}
                onChange={(e) => handleChange(e, 'carbs')}
                useUnframedInput={true}
                placeholder='НЕОБЯЗАТЕЛЬНО'
                label={FoodTransition.carbs}
                error={props.validationErrors?.info?.carbs}
            />
            <InputBox
                type='number'
                value={props.info.calories}
                onChange={(e) => handleChange(e, 'calories')}
                useUnframedInput={true}
                placeholder='НЕОБЯЗАТЕЛЬНО'
                label={FoodTransition.calories}
                error={props.validationErrors?.info?.calories}
            />
        </>
    )
}
