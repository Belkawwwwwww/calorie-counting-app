import React from 'react';
import { BZU, Micronutrient, TitleContainer } from './style';
import { NutritionTitleProps } from '../type';

export const NutritionTitle: React.FC<NutritionTitleProps> = ({
    nutritionData,
}) => {
    return (
        <TitleContainer>
            {nutritionData.map((nutrient, index) => (
                <BZU key={index}>
                    {' '}
                    <p>
                        {nutrient.value}{' '}
                        {nutrient.label === 'ккал' ? 'ккал' : 'г'}
                    </p>
                    <Micronutrient>{nutrient.label}</Micronutrient>
                </BZU>
            ))}
        </TitleContainer>
    );
};
