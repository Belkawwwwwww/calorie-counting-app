import { DailyCaloriesBlock } from '../../circleBlock/ui/DailyCaloriesBlock';
import {
    BJU,
    BJUName,
    Calories,
    Cel,
    Consumed,
    FirstBlock,
    Norm,
    Purpose,
    StyledSummaryBlock,
    TwoBlock,
} from './style';
import { useGetBzu } from '@/e_features/bzu/hooks/bzuHooks';
import { getFormattedDate } from '@/g_shared/lib/utils/dateUtils';

export const SummaryBlock = () => {
    const formattedDate = getFormattedDate();
    const { data } = useGetBzu(formattedDate);

    return (
        <StyledSummaryBlock>
            <FirstBlock>
                <Norm>
                    <Cel>цель</Cel>
                    <Purpose>
                        {Math.round(data?.data.max ?? 0)}
                        калорий
                    </Purpose>
                </Norm>
                <DailyCaloriesBlock date={formattedDate} />
                <Calories>
                    <Cel>съедено</Cel>
                    <Purpose>
                        {Math.round(data?.data.current ?? 0)}
                        калорий
                    </Purpose>
                </Calories>
            </FirstBlock>
            <TwoBlock>
                <BJU>
                    <BJUName>Углеводы:</BJUName>{' '}
                    <Consumed>
                        0 / {(data?.data.carbs ?? 0).toFixed(0)} г
                    </Consumed>
                </BJU>
                <BJU>
                    <BJUName>Белки:</BJUName>{' '}
                    <Consumed>
                        0 / {(data?.data.protein ?? 0).toFixed(0)} г
                    </Consumed>
                </BJU>
                <BJU>
                    <BJUName>Жиры:</BJUName>{' '}
                    <Consumed>
                        0 / {(data?.data.fat ?? 0).toFixed(0)} г
                    </Consumed>
                </BJU>
            </TwoBlock>
        </StyledSummaryBlock>
    );
};
