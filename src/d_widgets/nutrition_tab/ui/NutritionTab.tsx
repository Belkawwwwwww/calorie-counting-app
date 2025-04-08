import React, { FC } from 'react';
import { MenuContainer, MenuSelection } from './style';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { Props } from '../type';
import { CreateFood } from '@/e_features/food/create_food/ui/CreateFood';
import { CreateOrUpdateMeal } from '@/d_widgets/create_or_update_content/ui';

export const NutritionTab: FC<Props> = (props) => {
    return (
        <MenuContainer>
            <MenuSelection>
                <LinkButton isActive={props.activeTab === 'product'}
                    onClick={() => props.handleTabChange('product')}>
                    ДОБАВЛЕНИЕ ПРИЕМА ПИЩИ
                </LinkButton>{' '}
                |
                <LinkButton isActive={props.activeTab === 'food'}
                    onClick={() => props.handleTabChange('food')}>
                    СОЗДАНИЕ ЕДЫ
                </LinkButton>
            </MenuSelection>
            <>
                {props.activeTab === 'product' ? (
                    <CreateOrUpdateMeal
                        data={props.data}
                        title={props.title}
                        handleCloseAdditionalModal={
                            props.handleCloseAdditionalModal
                        }
                    />
                ) : null}
                {props.activeTab === 'food' ? (
                    <CreateFood
                        handleCloseAdditionalModal={
                            props.handleCloseAdditionalModal
                        }
                    />
                ) : null}
            </>
        </MenuContainer>
    );
};
