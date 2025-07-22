import { CreateFood } from '@/e_features/create_food/ui';
import { deleteItemThunk } from '@/e_features/create_or_update_meal/model/slice/createOrUpdateMealSlice';
import { useAppDispatch } from '@/g_shared/lib/store';
import { MealType } from '@/g_shared/lib/type/nutritionTypes';
import { mealsTranslation } from '@/g_shared/lib/utils';
import { AddedItemsModal } from '@/e_features/create_or_update_meal/components/added_items_modal';
import { FC, useState } from 'react';
import { Modal } from '../../../g_shared/ui/modal';
import { NutritionTab } from '../../nutrition_tab';
import { Props } from '../type';
import { ThreeDotsButton } from './style';

export const FoodDetailModal: FC<Props> = (props) => {
	const defaultTitle: MealType = props.title;
	const modalTitle = mealsTranslation[defaultTitle];
	const dispatch = useAppDispatch();
	const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);

	const handleDeleteItem = (index: number) => {
		dispatch(deleteItemThunk(index));
	};
	const handleOpenOptionsMenu = () => {
		setIsOptionsMenuOpen(true);
	};

	const handleCloseOptionsMenu = () => {
		setIsOptionsMenuOpen(false);
	};

	return (
		<>
			<Modal
				title={modalTitle}
				onClose={props.handleCloseAdditionalModal}
				width='600px'
				height='auto'
				rightContent={<ThreeDotsButton onClick={handleOpenOptionsMenu} />}
			>
				<AddedItemsModal
					onDeleteItem={handleDeleteItem}
					title={props.title}
				/>
				<NutritionTab
					title={props.title}
					handleCloseAdditionalModal={props.handleCloseAdditionalModal}
				/>
			</Modal>
			{isOptionsMenuOpen ? (
				<Modal
					title="СОЗДАТЬ БЛЮДО"
					onClose={handleCloseOptionsMenu}
					width="600px"
					height="auto"
				>
					<CreateFood handleCloseAdditionalModal={handleCloseOptionsMenu} />
				</Modal>
			) : null}

		</>
	);
};