import React from 'react';
import { BZU, Micronutrient, TitleContainer } from './style';
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
                        <p>
                            {nutrient.value} {index === 0 ? 'ккал' : 'г'}
                        </p>
                        <Micronutrient>{nutrient.label}</Micronutrient>
                    </BZU>
                ))}
            </>
        </TitleContainer>
    );
};
