import { FC } from 'react';
import { Modal } from '../../../../../g_shared/ui/modal';
import { InputBox } from '../../../../../g_shared/ui/input';
import { mealsTranslation } from '@/g_shared/lib/utils/translation';
import { NutritionTab } from '../../nutrition_tab';
import { Props } from './type';

export const FoodDetailModal: FC<Props> = (props) => {
    return (
        <>
            <Modal
                title={mealsTranslation[props.title]}
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
                />
            </Modal>
        </>
    );
};
