import { FC, useState } from 'react';
import styled from 'styled-components';

const TwoBlock = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
`;
const BJU = styled.div`
    flex: 0 0 33.3%;
`;
export const BJUBlock: FC = () => {
    const [dailyCalories, setDailyCalories] = useState(0);
    return (
        <TwoBlock>
            <BJU>Углеводы: {((dailyCalories * 0.6) / 4).toFixed(0)} г</BJU>
            <BJU>
                Белки:{' '}
                {dailyCalories !== 0
                    ? ((dailyCalories * 0.22) / 4).toFixed(0)
                    : 0}{' '}
                г
            </BJU>
            <BJU>
                Жиры:{' '}
                {dailyCalories !== 0
                    ? ((dailyCalories * 0.35) / 9).toFixed(0)
                    : 0}{' '}
                г
            </BJU>
        </TwoBlock>
    );
};
