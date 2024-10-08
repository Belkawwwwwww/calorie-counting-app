import { FC, useState } from "react";
import styled from "styled-components";
const StyledTwoBlock = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
`;
const StyledBJU = styled.div`
    flex: 0 0 33.3%;
`;
export const BJUBlock: FC = () => {
    const [dailyCalories, setDailyCalories] = useState(0);
    return (
        <StyledTwoBlock>
                <StyledBJU>
                    Углеводы: {((dailyCalories * 0.6) / 4).toFixed(0)} г
                </StyledBJU>
                <StyledBJU>
                    Белки:{' '}
                    {dailyCalories !== 0
                        ? ((dailyCalories * 0.22) / 4).toFixed(0)
                        : 0}{' '}
                    г
                </StyledBJU>
                <StyledBJU>
                    Жиры:{' '}
                    {dailyCalories !== 0
                        ? ((dailyCalories * 0.35) / 9).toFixed(0)
                        : 0}{' '}
                    г
                </StyledBJU>
            </StyledTwoBlock>
    )
}