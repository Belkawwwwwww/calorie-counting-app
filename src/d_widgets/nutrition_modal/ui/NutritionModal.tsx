import { FoodDetailModal } from '@/d_widgets/food_detail_modal';
import { clearAddedItemsThunk } from '@/e_features/create_or_update_meal/model/slice/createOrUpdateMealSlice';
import { useNutritionData } from '@/g_shared/lib/hooks';
import { useAppDispatch } from '@/g_shared/lib/store';
import { mealsTranslation } from '@/g_shared/lib/utils';
import { AddButton } from '@/g_shared/ui/add_meal_button';
import { FoodEatenList } from '@/g_shared/ui/food_item_list';
import { HeaderNutritionModal } from '@/g_shared/ui/header_nutrition_modal/ui/HeaderNutritionModal';
import { Modal } from '@/g_shared/ui/modal';
import { NutritionTitle } from '@/g_shared/ui/nutrient_title';
import { FC, useState } from 'react';
import { Props } from '../type';

export const NutritionModal: FC<Props> = (props) => {
    const [isAdditionalModalActive, setAdditionalModalActive] = useState(false);
    const nutritionData = useNutritionData(props.title);
    const dispatch = useAppDispatch()

    const handleAddMoreClick = () => {
        setAdditionalModalActive(true);
    };

    const handleCloseAdditionalModal = () => {
        setAdditionalModalActive(false);
        dispatch(clearAddedItemsThunk());
    };

    return (
        <Modal
            title={mealsTranslation[props.title]}
            onClose={props.onClose}
            width='600px'
            height='auto'
        >
            <HeaderNutritionModal title={props.title} />
            <NutritionTitle nutritionData={nutritionData} />
            <FoodEatenList mealType={props.title} />
            <AddButton onClick={handleAddMoreClick} text='ДОБАВИТЬ ЕЩЕ' />
            {isAdditionalModalActive ? (
                <FoodDetailModal
                    title={props.title}
                    value={props.value}
                    handleCloseAdditionalModal={handleCloseAdditionalModal}
                    onChange={props.onChange}
                    onClose={props.onClose}
                />
            ) : null}
        </Modal>
    );
};
