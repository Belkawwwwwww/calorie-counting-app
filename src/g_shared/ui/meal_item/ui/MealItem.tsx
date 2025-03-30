import { mealsTranslation } from '@/g_shared/lib/utils';
import { FC } from 'react';
import { Meal } from './style';
import { Props } from '../type';

export const MealItem: FC<Props> = (props) => {
    return (
        <Meal key={props.mealType} onClick={props.onClick}>
            {mealsTranslation[props.mealType]}: {Math.ceil(props.calories)}{' '}
            калорий
        </Meal>
    );
};
