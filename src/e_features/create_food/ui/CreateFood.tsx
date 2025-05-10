import { useAdditionalContentState } from '@/g_shared/lib/hooks/useAdditionalContentState/useAdditionalContentState';
import useFoodBlockModal from '@/g_shared/lib/hooks/useFoodBlockModal/useFoodBlockModal';
import { useModal } from '@/g_shared/lib/hooks/useModalOpen/useModal';
import { FoodOrProduct } from '@/g_shared/lib/type/SearchType';
import { FoodTransition } from '@/g_shared/lib/utils';
import { Button } from '@/g_shared/ui/button';
import { Error } from '@/g_shared/ui/error_display';
import { IngredientList } from '@/g_shared/ui/ingredient_list';
import { InputBox } from '@/g_shared/ui/input';
import { LoadingInBtn } from '@/g_shared/ui/loader';
import { ToggleButton } from '@/g_shared/ui/toggle_button';
import { FC, useState } from 'react';
import { AddedItemsCreateFood } from '../../../g_shared/lib/type/foodType';
import { AdditionalContent } from '../component/additional_content';
import { FoodBlockModal } from '../component/food_modal';
import { useCreateFood } from '../hooks/useCreateFood';
import { useFoodForm } from '../hooks/useCreateFoodForm';
import { CreateContainer } from './style';
import { Props } from './type';

export const CreateFood: FC<Props> = (props) => {
	const { modalState, setModalState, resetModalState } = useAdditionalContentState();
	const foodBlockModal = useModal();
	const { openFoodBlockModal, selectedItem } = useFoodBlockModal(foodBlockModal);
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
		openFoodBlockModal(item);
		foodBlockModal.openModal();
		resetModalState()
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
			<InputBox
				type='text'
				value={name}
				onChange={(e) => handleInputChange(e, 'name')}
				useUnframedInput={true}
				placeholder='ВВЕДИТЕ НАЗВАНИЕ'
				label={FoodTransition.name}
				id={name}
				error={validationErrors.name}
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
				showInfoInput={true}
				searchLabel='Добавить ингридиент'
			/>
			<ToggleButton
				options={['ДА', 'НЕТ']}
				selectedValue={isPublic ? 'ДА' : 'НЕТ'}
				onToggle={(value) => handleIsPublicToggle(value === 'ДА')}
				label={FoodTransition.is_public}
			/>

			<Error keyName='createFood' />
			<Button
				$variant='primary'
				$btnWidth='s'
				$btnSquareSize='button--square--size-s'
				type='button'
				onClick={handleSubmit}
			>
				{isLoading ? <LoadingInBtn /> : 'СОХРАНИТЬ'}
			</Button>
			<FoodBlockModal
				isOpen={foodBlockModal.isOpen}
				onClose={foodBlockModal.closeModal}
				item={selectedItem}
				handleCloseAdditionalModal={handleItemAdd}
			/>
		</CreateContainer>
	);
};
