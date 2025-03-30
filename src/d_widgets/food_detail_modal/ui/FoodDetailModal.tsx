import { MealType } from '@/g_shared/lib/type/nutritionTypes';
import { mealsTranslation } from '@/g_shared/lib/utils';
import { FC } from 'react';
import { InputBox } from '../../../g_shared/ui/input';
import { Modal } from '../../../g_shared/ui/modal';
import { NutritionTab } from '../../nutrition_tab';
import { Props } from '../type';

export const FoodDetailModal: FC<Props> = (props) => {
	const defaultTitle: MealType = props.title;
	const modalTitle = mealsTranslation[defaultTitle];

	return (
		<>
			<Modal
				title={modalTitle}
				onClose={props.handleCloseAdditionalModal}
				width='600px'
				height='auto'
			>
				<InputBox
					value={props.value}
					onChange={props.onChange}
					imageSrc='/barcode.png'
					type='number'
				/>
				<NutritionTab
					data={props.data}
					activeTab={props.activeTab}
					handleTabChange={props.handleTabChange}
					title={props.title}
					handleCloseAdditionalModal={props.handleCloseAdditionalModal}
				/>
			</Modal>
		</>
	);
};
