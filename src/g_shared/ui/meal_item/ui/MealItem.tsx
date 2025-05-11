import { mealsTranslation } from '@/g_shared/lib/utils';
import { FC } from 'react';
import { Meal, MealContent, StyledImage } from './style';
import { Props } from '../type';
import { Plus } from '@/g_shared/styles/plusStyles';
import { Image } from '../../image';
import { getImageSource } from '@/g_shared/lib/utils/imageUtils';

export const MealItem: FC<Props> = (props) => {
    const imageSource = getImageSource(props.mealType);
    return (
        <Meal key={props.mealType} onClick={props.onClick}>
            <MealContent>
                <StyledImage>
                    <Image src={imageSource} />
                </StyledImage>
                {mealsTranslation[props.mealType]}
            </MealContent>
            <MealContent>
                <StyledImage>
                    {Math.ceil(props.calories)}{' '}
                    калорий
                </StyledImage>

                <Plus />
            </MealContent>

        </Meal>
    );
};
