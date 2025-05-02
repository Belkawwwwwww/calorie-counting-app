import React from 'react';
import { BZU, Micronutrient, TitleContainer, Value } from './style';
import { NutritionTitleProps } from '../type';

export const NutritionTitle: React.FC<NutritionTitleProps> = (props) => {
    const nutritionItem = props.foodOrProduct ? [
        { value: Math.ceil(props.foodOrProduct.calories), label: 'Калории' },
        { value: Math.ceil(props.foodOrProduct.protein), label: 'Белки' },
        { value: Math.ceil(props.foodOrProduct.carbs), label: 'Углеводы' },
        { value: Math.ceil(props.foodOrProduct.fat), label: 'Жиры' },
    ] : props.nutritionData || [{ value: 0, label: 'Нет данных' }]
    return (
        <TitleContainer>
            <>
                {nutritionItem.map((nutrient, index) => (
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
