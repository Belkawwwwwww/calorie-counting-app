import { useGetBzu } from '@/e_features/bzu/hooks/bzuHooks';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import React, { FC } from 'react';
import { Props } from '../type';
import { Circle, Significance, Text } from './style';

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
