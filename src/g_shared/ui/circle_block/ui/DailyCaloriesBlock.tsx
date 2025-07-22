import { FC } from 'react';
import { Props } from '../type';
import { CaloriesText, Circle, ProgressCircle, StyledSVG, Text, } from './style';

export const DailyCaloriesBlock: FC<Props> = (props) => {
    const maxCalories = props.date?.data.max || 0;
    const currentCalories = props.date?.data.current || 0;
    const remainingCalories = maxCalories - currentCalories;
    const isOverkill = remainingCalories < 0;
    const displayCalories = Math.abs(maxCalories - currentCalories).toFixed(0);
    const message = isOverkill ? 'свыше нормы' : 'осталось';
    const fillPercent = Math.min((currentCalories / maxCalories) * 100, 100); // Процент заполнения
    const radius = 60;

    return (
        <StyledSVG viewBox="0 0 150 150">
            <Circle cx="75" cy="75" r={radius} />  // Фон
            <ProgressCircle
                cx="75"
                cy="75"
                r={radius}
                $fillPercent={fillPercent}
                $isOverkill={isOverkill}
                radius={60}
            />

            <CaloriesText x="75" y="60">
                {displayCalories}
            </CaloriesText>

            <Text x="75" y="90">
                {message}
            </Text>
        </StyledSVG>
    );
};