import { FoodTransition } from '@/g_shared/lib/utils';
import { InputBox } from '../input';
import { FC } from 'react';
import { Props } from './type';

export const InfoInput: FC<Props> = (props) => (
    <>
        <InputBox
            type='number'
            value={props.info.protein}
            onChange={(e) => props.handleInputChange(e, 'protein')}
            useUnframedInput={true}
            placeholder='НЕОБЯЗАТЕЛЬНО'
            label={FoodTransition.protein}
            error={props.validationErrors.info?.protein}
        />
        <InputBox
            type='number'
            value={props.info.fat}
            onChange={(e) => props.handleInputChange(e, 'fat')}
            useUnframedInput={true}
            placeholder='НЕОБЯЗАТЕЛЬНО'
            label={FoodTransition.fat}
            error={props.validationErrors.info?.fat}
        />
        <InputBox
            type='number'
            value={props.info.carbs}
            onChange={(e) => props.handleInputChange(e, 'carbs')}
            useUnframedInput={true}
            placeholder='НЕОБЯЗАТЕЛЬНО'
            label={FoodTransition.carbs}
            error={props.validationErrors.info?.carbs}
        />
        <InputBox
            type='number'
            value={props.info.calories}
            onChange={(e) => props.handleInputChange(e, 'calories')}
            useUnframedInput={true}
            placeholder='НЕОБЯЗАТЕЛЬНО'
            label={FoodTransition.calories}
            error={props.validationErrors.info?.calories}
        />
    </>
);
