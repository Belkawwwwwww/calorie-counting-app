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
import { useGetBzu } from '@/e_features/bzu/hooks/bzuHooks';

export const SummaryBlock = () => {
    const { data } = useGetBzu();
    const [dailyCalories, setDailyCalories] = useState(0);
    const handleCalories = (calories: number) => {
        setDailyCalories(calories);
    };
    console.log(data?.data.current);

    return (
        <StyledSummaryBlock>
            <FirstBlock>
                <Norm>
                    <Cel>цель</Cel>
                    <Purpose>{Math.round(data?.data.max ?? 0)} калорий</Purpose>
                </Norm>
                <Circle>
                    {' '}
                    <DailyCaloriesBlock onCaloriesCalculated={handleCalories} />
                </Circle>
                <Calories>
                    <Cel>съедено</Cel>
                    <Purpose>
                        {Math.round(data?.data.current ?? 0)} калорий
                    </Purpose>
                </Calories>
            </FirstBlock>
            <TwoBlock>
                <BJU>
                    <BJUName>Углеводы:</BJUName> <Consumed>0</Consumed>
                    <Still>
                        {(((data?.data.max ?? 0) * 0.6) / 4).toFixed(0)} г
                        осталось
                    </Still>
                </BJU>
                <BJU>
                    <BJUName>Белки:</BJUName> <Consumed>0</Consumed>
                    <Still>
                        {(((data?.data.max ?? 0) * 0.2) / 4).toFixed(0)} г
                        осталось
                    </Still>
                </BJU>
                <BJU>
                    <BJUName>Жиры:</BJUName> <Consumed>0</Consumed>
                    <Still>
                        {(((data?.data.max ?? 0) * 0.3) / 9).toFixed(0)} г
                        осталось
                    </Still>
                </BJU>
            </TwoBlock>
        </StyledSummaryBlock>
    );
};
