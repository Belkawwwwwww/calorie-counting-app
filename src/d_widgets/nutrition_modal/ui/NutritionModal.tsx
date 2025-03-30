import { Modal } from '@/g_shared/ui/modal';
import { FC, useState } from 'react';
import { Props } from '../type';
import { mealsTranslation } from '@/g_shared/lib/utils';
import { NutritionTitle } from '@/g_shared/ui/nutrient_title';
import { FoodEatenList } from '@/g_shared/ui/food_item_list';
import { FoodDetailModal } from '@/d_widgets/food_detail_modal';
import { AddMoreButton } from '@/g_shared/ui/add_more_button_meal';

export const NutritionModal: FC<Props> = (props) => {
    const [isAdditionalModalActive, setAdditionalModalActive] = useState(false);
    const [activeTab, setActiveTab] = useState('products');
    const handleAddMoreClick = () => {
        setAdditionalModalActive(true);
    };

    const handleCloseAdditionalModal = () => {
        setAdditionalModalActive(false);
    };
    const handleTabChange = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Modal
                title={mealsTranslation[props.title]}
                onClose={props.onClose}
                width='600px'
                height='auto'
            >
                <NutritionTitle mealType={props.title} />
                <FoodEatenList mealType={props.title} />
                <AddMoreButton onClick={handleAddMoreClick} />
                {isAdditionalModalActive ? (
                    <FoodDetailModal
                        title={props.title}
                        value={props.value}
                        data={props.data}
                        handleTabChange={handleTabChange}
                        activeTab={activeTab}
                        handleCloseAdditionalModal={handleCloseAdditionalModal}
                        onChange={props.onChange}
                        onClose={props.onClose}
                    />
                ) : null}
            </Modal>
        </>
    );
};
