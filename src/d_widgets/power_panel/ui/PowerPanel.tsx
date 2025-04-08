import {
	Calories,
	Cel,
	FirstBlock,
	Norm,
	Purpose,
	StyledSummaryBlock,
	BZU,
} from './style';

import { DailyCaloriesBlock } from '@/g_shared/ui/circle_block';
import { NutrientProgressBar } from '@/g_shared/ui/nutrition_progress_bar';
import { Meal } from '@/g_shared/lib/type/nutritionTypes';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import { useGetBzu } from '@/e_features/bzu/hooks';
import { getFormattedDate, getTotalNutrients } from '@/g_shared/lib/utils';
import { useGetUserMeal } from '@/e_features/get_meal/hooks';

export const PowerPanel = () => {
	const formattedDate = getFormattedDate();
	const { data: bzuData, isLoading: isBzuLoading } = useGetBzu(formattedDate);
	const { data: userMealData, isLoading: isMealLoading } =
		useGetUserMeal(formattedDate);

	const meals: Meal[] = Array.isArray(userMealData?.data)
		? userMealData.data
		: [];
	const { totalProtein, totalFat, totalCarbs } = getTotalNutrients(meals);
	const roundValue = (value: number | undefined) => Math.round(value || 0);

	const norms = {
		fat: bzuData?.data.fat ?? 0,
		protein: bzuData?.data.protein ?? 0,
		carbs: bzuData?.data.carbs ?? 0,
		current: bzuData?.data.current ?? 0,
		max: bzuData?.data.max ?? 0,
	};

	if (isBzuLoading || isMealLoading) {
		return <LoadingIndicator />;
	}

	return (
		<StyledSummaryBlock>
			<FirstBlock>
				<Norm>
					<Cel>{Math.round(bzuData?.data.max ?? 0)} ккал</Cel>
					<Purpose>цель</Purpose>
				</Norm>
				<DailyCaloriesBlock date={bzuData} isLoading={isBzuLoading} />
				<Calories>
					<Cel>{roundValue(norms.current)} ккал</Cel>
					<Purpose>съедено</Purpose>
				</Calories>
			</FirstBlock>
			<BZU>
				{[
					{
						label: 'Углеводы',
						current: totalCarbs,
						max: norms.carbs,
					},
					{
						label: 'Белки',
						current: totalProtein,
						max: norms.protein,
					},
					{ label: 'Жиры', current: totalFat, max: norms.fat },
				].map(({ label, current, max }) => (
					<NutrientProgressBar
						key={label}
						label={label}
						current={current}
						max={max}
					/>
				))}
			</BZU>
		</StyledSummaryBlock>
	);
};
