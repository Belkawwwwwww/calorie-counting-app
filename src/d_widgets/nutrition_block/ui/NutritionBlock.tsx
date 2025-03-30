import { StyledNutritionBlock } from './style';

import { NutritionModal } from '@/d_widgets/nutrition_modal';
import { calculateCalories } from '@/e_features/meal';
import { useMealDataContext } from '@/g_shared/lib/context';
import { useModalOpen } from '@/g_shared/lib/hooks';
import { Meal, MealType, mealTypes } from '@/g_shared/lib/type/nutritionTypes';
import { getFormattedDate } from '@/g_shared/lib/utils';
import { LoadingIndicator } from '@/g_shared/ui/loader';
import { MealItem } from '@/g_shared/ui/meal_item';
import { FC, memo, useCallback, useState } from 'react';

export const NutritionBlock: FC = memo(() => {
	const { isModalActive, handleModalOpen, handleModalClose } = useModalOpen();
	const [eat, setEat] = useState('');
	const [mealInfo, setMealInfo] = useState<Meal | null>(null);
	const [selectedMealType, setSelectedMealType] = useState<MealType | null>(
		null,
	);
	const formattedDate = getFormattedDate();
	const { mealData, isLoading, error } = useMealDataContext();
	const caloriesMap: Record<MealType, number> = {
		breakfast: 0,
		lunch: 0,
		dinner: 0,
	};

	const meals = mealData?.data || [];
	const updatedCaloriesMap = calculateCalories(meals, caloriesMap);

	const handleMealClick = useCallback(
		(mealType: MealType) => {
			const foundMeal = meals?.find(
				(mealItem: Meal) => mealItem.meal_type === mealType,
			);

			setMealInfo(foundMeal || null);
			setSelectedMealType(mealType);
			handleModalOpen();
		},
		[meals, handleModalOpen],
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEat(e.target.value);
	};
	if (isLoading) {
		return <LoadingIndicator />;
	}
	if (error) {
		return <p>Ошибка при загрузке данных о питании.</p>;
	}

	return (
		<StyledNutritionBlock>
			{isModalActive ? (
				<NutritionModal
					data={formattedDate}
					title={selectedMealType || 'breakfast' || 'dinner' || 'lunch'}
					value={eat}
					onChange={handleChange}
					onClose={handleModalClose}
					dataMeal={mealInfo}
				/>
			) : null}
			<>
				{mealTypes.map((mealType) => (
					<MealItem
						key={mealType}
						mealType={mealType}
						calories={updatedCaloriesMap[mealType]}
						onClick={() => handleMealClick(mealType)}
					/>
				))}
			</>
		</StyledNutritionBlock>
	);
});
