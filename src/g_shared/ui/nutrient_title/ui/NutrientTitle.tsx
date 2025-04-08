import React from 'react';
import { BZU, Micronutrient, TitleContainer, Value } from './style';
import { NutritionTitleProps } from '../type';
import { useNutritionData } from '@/g_shared/lib/hooks';

export const NutritionTitle: React.FC<NutritionTitleProps> = (props) => {
    const nutritionData = useNutritionData(props.mealType);
    return (
        <TitleContainer>
            <>
                {nutritionData.map((nutrient, index) => (
                    <BZU key={index}>
                        {' '}
                        <Value>
                            {nutrient.value} {index === 0 ? 'ккал' : 'г'}
                        </Value>
                        <Micronutrient>{nutrient.label}</Micronutrient>
                    </BZU>
                ))}
            </>
        </TitleContainer>
    );
};
