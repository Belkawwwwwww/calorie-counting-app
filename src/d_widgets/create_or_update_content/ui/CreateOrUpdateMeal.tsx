import { FoodOrProduct } from '@/g_shared/lib/type/SearchType';
import { MealType } from '@/g_shared/lib/type/nutritionTypes';
import { Error } from '@/g_shared/ui/error_display';
import { FC, useState } from 'react';
import { Modal } from '@/g_shared/ui/modal';
import { FoodBlocks } from '@/g_shared/ui/create_meal_bocks';
import { SearchContent } from '../component/SearchContent';
import { mealsTranslation } from '@/g_shared/lib/utils';

type Props = {
    data: string;
    title: MealType;
    handleCloseAdditionalModal?: () => void;
};

export const CreateOrUpdateMeal: FC<Props> = (props) => {
    const [isModalActive, setModalActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState<FoodOrProduct | null>(null);
    const defaultTitle: MealType = props.title;
    const modalTitle = mealsTranslation[defaultTitle];

    const handleAddMoreClick = (item: FoodOrProduct) => {
        setSelectedItem(item);
        setModalActive(true);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setModalActive(false);
    };

    return (
        <>
            <div>
                <SearchContent onItemClick={handleAddMoreClick} />
            </div>
            {isModalActive ? (
                <Modal title={modalTitle} onClose={handleCloseModal} width='400px' height='auto'>
                    <FoodBlocks mealType={props.title}item={selectedItem} />
                    <Error keyName='createOrUpdateMeal' absolute={false} />
                </Modal>
            ) : null}
        </>
    );
};
