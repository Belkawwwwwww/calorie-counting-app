import { AdditionalContent } from '@/e_features/create_food/component/additional_content';
import { addItemThunk } from '@/e_features/create_or_update_meal/model/slice';
import { FoodBlockModal } from '@/e_features/create_or_update_meal/ui/modal';
import { useLazySearchFood } from '@/e_features/search_food/hooks';
import { useAdditionalContentState } from '@/g_shared/lib/hooks/useAdditionalContentState/useAdditionalContentState';
import useFoodBlockModal from '@/g_shared/lib/hooks/useFoodBlockModal/useFoodBlockModal';
import { useAppDispatch } from '@/g_shared/lib/store';
import { AddedItem } from '@/g_shared/lib/type/AddedItemType';
import { FoodOrProduct } from '@/g_shared/lib/type/SearchType';
import { mealsTranslation } from '@/g_shared/lib/utils';
import { FC, useState } from 'react';
import { useModal } from '../../../g_shared/lib/hooks/useModalOpen/useModal';
import { FoodMenu } from '../component/food_menu';
import { Props } from '../type';

export const CreateOrUpdateMeal: FC<Props> = (props) => {
    const { modalState, setModalState, resetModalState } = useAdditionalContentState();
    const dispatch = useAppDispatch();
    const foodBlockModal = useModal();
    const { openFoodBlockModal, selectedItem } = useFoodBlockModal(foodBlockModal);
    const { resetSearch, searchTermLocal } = useLazySearchFood();
    const modalTitle = mealsTranslation[props.title];
    const [activeTab, setActiveTab] = useState<'frequent' | 'recently'>('frequent');
    const handleTabChange = (tab: 'frequent' | 'recently') => {
        setActiveTab(tab);
    };
    const handleAddMoreClick = (item: FoodOrProduct) => {
        openFoodBlockModal(item);
        foodBlockModal.openModal();
        resetModalState()
    };

    const handleItemAdded = (item: FoodOrProduct, weight: number) => {
        const addedItem: AddedItem = {
            id: item.id,
            type: (item as any).category_id !== undefined ? 'product' : 'food', item: item,
            weight: weight,
        };
        dispatch(addItemThunk(addedItem));
        resetSearch();
        foodBlockModal.closeModal();
    };


    return (
        <>
            <AdditionalContent
                modalState={modalState}
                handleAddMoreClick={handleAddMoreClick}
                showInfoInput={false}
                searchLabel='Добавить блюдо'
                setModalState={setModalState}
            />
            {searchTermLocal.length === 0 ? (
                <FoodMenu
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                />
            ) : null}

            <FoodBlockModal
                isOpen={foodBlockModal.isOpen}
                onClose={foodBlockModal.closeModal}
                mealType={props.title}
                item={selectedItem}
                onItemAdded={handleItemAdded}
                modalTitle={modalTitle}
                onSuccess={props.handleCloseAdditionalModal}
            />
        </>
    );
};
