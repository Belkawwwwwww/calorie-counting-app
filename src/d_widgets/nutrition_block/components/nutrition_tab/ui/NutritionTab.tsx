import React, { FC } from 'react';
import { MenuContainer, MenuSelection, OptionBlock } from './style';
import { LinkButton } from '@/g_shared/ui/linkButton';
import { Props } from '../type';

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
                    <>
                        <OptionBlock>
                            <>ПРОДУКТ</>
                            <>БЛЮДО</>
                        </OptionBlock>
                        <>
                            <>ДАТА: {props.data}</>
                            <>ID: </>
                            <>ВЕС: </>
                        </>
                    </>
                ) : null}
                {props.activeTab === 'food' ? <CreateFood /> : null}
            </>
        </MenuContainer>
    );
};
