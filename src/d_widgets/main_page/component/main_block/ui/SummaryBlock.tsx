import { useState } from 'react';
import { DailyCaloriesBlock } from './component/DailyCaloriesBlock';
import {
    BJU,
    BJUName,
    Calories,
    Cel,
    Circle,
    Consumed,
    FirstBlock,
    Norm,
    Purpose,
    Still,
    StyledSummaryBlock,
    TwoBlock,
} from '../style';

export const SummaryBlock = () => {
    const [dailyCalories, setDailyCalories] = useState(0);
    const handleCalories = (calories: number) => {
        setDailyCalories(calories);
    };

    return (
        <StyledSummaryBlock>
            <FirstBlock>
                <Norm>
                    <Cel>цель</Cel>
                    <Purpose>{dailyCalories.toFixed(0)} калорий</Purpose>
                </Norm>
                <Circle>
                    {' '}
                    <DailyCaloriesBlock onCaloriesCalculated={handleCalories} />
                </Circle>
                <Calories>
                    <Cel>съедено</Cel> <Purpose>0 </Purpose>
                </Calories>
            </FirstBlock>
            <TwoBlock>
                <BJU>
                    <BJUName>Углеводы:</BJUName> <Consumed>0</Consumed>
                    <Still>
                        {((dailyCalories * 0.6) / 4).toFixed(0)} г осталось
                    </Still>
                </BJU>
                <BJU>
                    <BJUName>Белки:</BJUName> <Consumed>0</Consumed>
                    <Still>
                        {dailyCalories !== 0
                            ? ((dailyCalories * 0.22) / 4).toFixed(0)
                            : 0}{' '}
                        г осталось
                    </Still>
                </BJU>
                <BJU>
                    <BJUName>Жиры:</BJUName> <Consumed>0</Consumed>
                    <Still>
                        {dailyCalories !== 0
                            ? ((dailyCalories * 0.35) / 9).toFixed(0)
                            : 0}{' '}
                        г осталось
                    </Still>
                </BJU>
            </TwoBlock>
        </StyledSummaryBlock>
    );
};
