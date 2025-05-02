import { useModal } from '@/g_shared/lib/hooks/useModalOpen/useModal';
import { FoodOrProduct } from '@/g_shared/lib/type/SearchType';
import { FoodTransition } from '@/g_shared/lib/utils';
import { Error } from '@/g_shared/ui/error_display';
import { FoodCreationDescription } from '@/g_shared/ui/food_creation_description/ui/FoodCreationDescription';
import { IngredientList } from '@/g_shared/ui/ingredient_list/IngredientList';
import { ToggleButton } from '@/g_shared/ui/toggle_button';
import { FC, useState } from 'react';
import { useCreateFood } from '../hooks/useCreateFood';
import { useFoodForm } from '../hooks/useCreateFoodForm';
import { AddedItemsCreateFood } from '../type/foodType';
import { CreateContainer } from './style';
import { AdditionalContent } from '../component/additional_content';
import { FoodBlockModal } from '../component/food_modal';
import { SaveButton } from '../../../g_shared/ui/btn_save_create_food/ui/SaveButton';
import { Props } from './type';

export const CreateFood: FC<Props> = (props) => {
	const [modalState, setModalState] = useState({ search: false, info: false });
	const foodBlockModal = useModal();
	const [selectedItem, setSelectedItem] = useState<FoodOrProduct | null>(null);
	const [addedItems, setAddedItems] = useState<AddedItemsCreateFood[]>([]);
	const { createFood, isLoading } = useCreateFood();
	const { state, handleIsPublicToggle, handleInputChange, handleSubmit } =
		useFoodForm({
			createFood,
			onSuccess: props.handleCloseAdditionalModal,
			addedItems: addedItems,
		});
	const { name, isPublic, info, validationErrors } = state;
	const handleAddMoreClick = (item: FoodOrProduct) => {
		setSelectedItem(item);
		foodBlockModal.openModal();
		setModalState({ search: false, info: false });
	};

	const handleDeleteItem = (index: number) => {
		setAddedItems((prevItems) => prevItems.filter((_, i) => i !== index));
	};
	const handleItemAdd = (item: FoodOrProduct, weight: number) => {
		if (item && weight > 0) {
			const newItem: AddedItemsCreateFood = {
				product_id: item.id,
				weight: weight,
				item: item,
			};
			setAddedItems((prevItems) => [...prevItems, newItem]);
		}
		foodBlockModal.closeModal();
	};

	return (
		<CreateContainer>
			<FoodCreationDescription
				name={name}
				handleInputChange={handleInputChange}
				validationErrors={validationErrors}
			/>
			<IngredientList
				addedItems={addedItems}
				handleDeleteItem={handleDeleteItem}
			/>
			<AdditionalContent
				modalState={modalState}
				handleAddMoreClick={handleAddMoreClick}
				info={info}
				handleInputChange={handleInputChange}
				validationErrors={validationErrors}
				setModalState={setModalState}
			/>
			<ToggleButton
				options={['ДА', 'НЕТ']}
				selectedValue={isPublic ? 'ДА' : 'НЕТ'}
				onToggle={(value) => handleIsPublicToggle(value === 'ДА')}
				label={FoodTransition.is_public}
			/>

			<Error keyName='createFood' />
			<SaveButton onClick={handleSubmit} isLoading={isLoading} />
			<FoodBlockModal
				isOpen={foodBlockModal.isOpen}
				onClose={foodBlockModal.closeModal}
				item={selectedItem}
				handleCloseAdditionalModal={handleItemAdd}
			/>
		</CreateContainer>
	);
};
