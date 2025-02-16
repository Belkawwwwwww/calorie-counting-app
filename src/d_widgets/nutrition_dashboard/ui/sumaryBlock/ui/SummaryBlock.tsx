import { useGetUserMeal } from '@/e_features/meal/hooks/foodHoooks';
import { DailyCaloriesBlock } from '../../../component/circle_block/ui/DailyCaloriesBlock';
import {
    Calories,
    Cel,
    FirstBlock,
    Norm,
    Purpose,
    StyledSummaryBlock,
    TwoBlock,
} from './style';
import { useGetBzu } from '@/e_features/bzu/hooks/bzuHooks';
import { getFormattedDate } from '@/g_shared/lib/utils/dateUtils';
import { getTotalNutrients } from '@/e_features/meal/utils/calculations';
import { NutrientProgressBar } from '@/d_widgets/nutrition_dashboard/component/progress_bar/ui/ProgressBar';

export const SummaryBlock = () => {
    const formattedDate = getFormattedDate();
    const { data: bzuData } = useGetBzu(formattedDate);
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
                <DailyCaloriesBlock date={formattedDate} />
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
