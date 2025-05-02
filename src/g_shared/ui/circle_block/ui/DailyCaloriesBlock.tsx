import { FC } from 'react';
import { FetchIndicator } from '../../fetchn_indicator/ui/FetchIndicator';
import { Props } from '../type';
import { BoxCircle, Circle, Significance, Text } from './style';

export const DailyCaloriesBlock: FC<Props> = (props) => {
    const maxCalories = props.date?.data.max || 0;
    const currentCalories = props.date?.data.current || 0;
    const remainingCalories = maxCalories - currentCalories;
    const isOverkill = remainingCalories < 0;
    const displayCalories = Math.abs(remainingCalories).toFixed(0);
    const message = isOverkill ? 'свыше нормы' : 'осталось';
    const fillPercent = Math.min((currentCalories / maxCalories) * 100, 100); // Процент заполнения

    return (
        <FetchIndicator isLoading={props.isLoading}>
            <BoxCircle>
                <Circle $isOverkill={isOverkill}>
                    <Significance $isOverkill={isOverkill}>
                        {displayCalories}
                    </Significance>
                    <Text $isOverkill={isOverkill}>{message}</Text>
                </Circle>
            </BoxCircle>
        </FetchIndicator>

    );
};
