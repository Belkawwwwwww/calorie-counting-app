import { useGetUserMeal } from '@/e_features/meal/hooks/useGetUserMeal';
import {
    Calories,
    Cel,
    FirstBlock,
    Norm,
    Purpose,
    StyledSummaryBlock,
    TwoBlock,
} from './style';
import { useGetBzu } from '@/e_features/bzu/hooks/useGetBzu';
import { getFormattedDate } from '@/g_shared/lib/utils/dateUtils';
import { getTotalNutrients } from '@/e_features/meal/utils/getTotalNutrients';
import { DailyCaloriesBlock } from '@/d_widgets/circle_block';
import { NutrientProgressBar } from '@/d_widgets/nutrition_progress_bar';

export const PowerPanel = () => {
    const formattedDate = getFormattedDate();
    const { data: bzuData, isLoading } = useGetBzu(formattedDate);
    const { data: UserMealData } = useGetUserMeal(formattedDate);
    const { totalProtein, totalFat, totalCarbs } = getTotalNutrients(
        UserMealData?.data || []
    );
    const normFat = bzuData?.data.fat ?? 0;
    const normProtein = bzuData?.data.protein ?? 0;
    const normCarbs = bzuData?.data.carbs ?? 0;

    return (
        <StyledSummaryBlock>
            <FirstBlock>
                <Norm>
                    <Cel>{Math.round(bzuData?.data.max ?? 0)} ккал</Cel>
                    <Purpose>цель</Purpose>
                </Norm>
                <DailyCaloriesBlock date={bzuData} isLoading={isLoading} />
                <Calories>
                    <Cel>{Math.round(bzuData?.data.current ?? 0)} ккал</Cel>
                    <Purpose>съедено</Purpose>
                </Calories>
            </FirstBlock>
            <TwoBlock>
                <NutrientProgressBar
                    label='Углеводы'
                    current={totalCarbs}
                    max={normCarbs}
                />
                <NutrientProgressBar
                    label='Белки'
                    current={totalProtein}
                    max={normProtein}
                />
                <NutrientProgressBar
                    label='Жиры'
                    current={totalFat}
                    max={normFat}
                />
            </TwoBlock>
        </StyledSummaryBlock>
    );
};
