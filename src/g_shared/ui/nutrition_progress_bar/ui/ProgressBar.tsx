import { FC } from 'react';

import { Props } from '../type';
import { BJU, Consumed, ProgressBarContainer, ProgressBarFill } from './style';
import { calculatePercentages } from '@/g_shared/lib/utils';

export const NutrientProgressBar: FC<Props> = (props) => {
    const percentage = calculatePercentages(props.current, props.max);
    const color = percentage > 100 ? '#b56d5b' : 'var(--color-text1)';
    return (
        <BJU>
            <>{props.label}</>
            <ProgressBarContainer>
                <ProgressBarFill
                    style={{
                        width: `${Math.min(percentage, 100)}%`,
                        backgroundColor: color,
                    }}
                />
            </ProgressBarContainer>
            <Consumed>
                {props.current}/{props.max.toFixed(0)} г
            </Consumed>
        </BJU>
    );
};
