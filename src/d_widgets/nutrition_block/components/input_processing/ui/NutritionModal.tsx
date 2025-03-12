import { Modal } from '@/g_shared/ui/modal';
import { FC, useState } from 'react';
import { Props } from '../type';
import { mealsTranslation } from '@/g_shared/lib/utils/translation';
import { useNutritionData } from '@/g_shared/lib/hooks';
import { NutritionTitle } from '@/g_shared/ui/nutrient_title';
import { FoodEatenList } from '@/g_shared/ui/food_item_list';
import { ModalFood } from '@/g_shared/ui/dop_modal_food';
import { AddMoreButton } from '@/g_shared/ui/add_more_button_meal';

export const NutritionModalContainer: FC<Props> = (props) => {
    const [isAdditionalModalActive, setAdditionalModalActive] = useState(false);
    const [activeTab, setActiveTab] = useState('products');
    const nutritionData = useNutritionData(props.dataMeal);
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
                <NutritionTitle nutritionData={nutritionData} />
                <FoodEatenList mealFoods={props.dataMeal} />
                <AddMoreButton onClick={handleAddMoreClick} />
                {isAdditionalModalActive ? (
                    <ModalFood
                        title={props.title}
                        value={props.value}
                        data={props.data}
                        handleTabChange={handleTabChange}
                        activeTab={activeTab}
                        handleCloseAdditionalModal={handleCloseAdditionalModal}
                        onChange={props.onChange}
                    />
                ) : null}
            </Modal>
        </>
    );
};
