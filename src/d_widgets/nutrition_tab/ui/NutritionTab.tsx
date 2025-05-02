import { CreateOrUpdateMeal } from '@/d_widgets/create_or_update_content';
import { FC } from 'react';
import { Props } from '../type';
import { MenuContainer } from './style';

export const NutritionTab: FC<Props> = (props) => {
    return (
        <MenuContainer>
            <>
                <CreateOrUpdateMeal
                    title={props.title}
                    handleCloseAdditionalModal={
                        props.handleCloseAdditionalModal
                    }
                />

            </>
        </MenuContainer >
    );
};
