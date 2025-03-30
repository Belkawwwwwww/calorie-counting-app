import React, { FC } from 'react';
import { MenuContainer, MenuSelection } from './style';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { Props } from '../type';
import { CreateOrUpdateMeal } from '@/e_features/meal';
import { CreateFood } from '@/e_features/food/create_food/ui/CreateFood';

export const NutritionTab: FC<Props> = (props) => {
    return (
        <MenuContainer>
            <MenuSelection>
                <LinkButton onClick={() => props.handleTabChange('product')}>
                    ДОБАВЛЕНИЕ ПРИЕМА ПИЩИ
                </LinkButton>{' '}
                |
                <LinkButton onClick={() => props.handleTabChange('food')}>
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
