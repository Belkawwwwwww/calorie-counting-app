import { FC } from 'react';
import { Props } from '../type';
import { MenuContainer, OptionBlock } from './style';
import { LinkButton } from '../../linkButton';

export const NutritionTab: FC<Props> = (props) => {
    return (
        <MenuContainer>
            <div>
                <LinkButton onClick={() => props.handleTabChange('product')}>
                    ДОБАВЛЕНИЕ ПРИЕМА ПИЩИ
                </LinkButton>
                |
                <LinkButton onClick={() => props.handleTabChange('food')}>
                    СОЗДАНИЕ ЕДЫ
                </LinkButton>
            </div>
            <div>
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
                {props.activeTab === 'food' ? (
                    <div>
                        <h2>Список блюд</h2>
                        <p>Здесь будут бл</p>
                    </div>
                ) : null}
            </div>
        </MenuContainer>
    );
};
