import { mealsTranslation } from '@/g_shared/lib/utils/translation';
import { FC } from 'react';
import { Meal } from './style';
import { Props } from '../type';

export const MealItem: FC<Props> = (props) => (
    <Meal key={props.mealType} onClick={props.onClick}>
        {mealsTranslation[props.mealType]}: {props.calories} калорий
    </Meal>
);
