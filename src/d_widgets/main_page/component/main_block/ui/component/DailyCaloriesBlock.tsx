import { useGetBzu } from '@/e_features/bzu/hooks/bzuHooks';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
    date: string;
};

const Circle = styled.div<{ $isOverkill?: boolean }>`
    border: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : '#f0f0f0')} solid
        5px;
    border-radius: 50%;
    padding: 13px 20px;
    text-align: center;
    width: 125px;
    height: 125px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 480px) {
        width: 100px;
        height: 100px;
    }
`;

const Text = styled.div<{ $isOverkill?: boolean }>`
    font-size: 11px;
    color: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : 'inherit')};
`;

const Significance = styled.div<{ $isOverkill?: boolean }>`
    font-size: 30px;
    font-weight: bold;
    color: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : 'inherit')};
    @media (max-width: 480px) {
        font-size: 25px;
    }
`;

export const DailyCaloriesBlock: FC<Props> = (props) => {
    const { data, isLoading } = useGetBzu(props.date);
    const maxCalories = data?.data.max || 0;
    const currentCalories = data?.data.current || 0;
    const remainingCalories = maxCalories - currentCalories;
    const isOverkill = remainingCalories < 0;
    const displayCalories = Math.abs(remainingCalories).toFixed(0);
    const message = isOverkill ? 'свыше нормы' : 'осталось';

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <Circle $isOverkill={isOverkill}>
            <Significance $isOverkill={isOverkill}>
                {displayCalories}
            </Significance>
            <Text $isOverkill={isOverkill}>{message}</Text>
        </Circle>
    );
};

export default DailyCaloriesBlock;
