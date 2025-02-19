import { Button } from '@/g_shared/ui/button';
import { Modal } from '@/g_shared/ui/modal';
import { FC, useState } from 'react';
import { Props } from '../type';
import { mealsTranslation } from '@/g_shared/lib/utils/translation';
import styled from 'styled-components';
import { NutritionTitle } from '../../../../../g_shared/ui/nutrient_title/ui/NutrientTitle';
import { InputBox } from '@/g_shared/ui/input';
import { useNutritionData } from '@/g_shared/lib/hooks';
export const TitleNutrition = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 14px;
`;
export const Food = styled.div``;
export const MealName = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FoodEaten = styled.div`
    margin-bottom: 15px;
`;
export const Meal = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eaeff2;
    padding-top: 7px;
    padding-bottom: 7px;
    align-items: center;
`;
export const Gram = styled.div`
    font-size: 11px;
`;

export const InputModal: FC<Props> = (props) => {
    const [isAdditionalModalActive, setAdditionalModalActive] = useState(false);
    const nutritionData = useNutritionData(props.dataMeal);
    const handleAddMoreClick = () => {
        setAdditionalModalActive(true); // Открываем дополнительное модальное окно
    };

    const handleCloseAdditionalModal = () => {
        setAdditionalModalActive(false); // Закрываем дополнительное модальное окно
    };

    return (
        <Modal
            title={mealsTranslation[props.title]}
            onClose={props.onClose}
            width='600px'
            height='auto'
        >
            <NutritionTitle nutritionData={nutritionData} />
            <Food>
                <FoodEaten>
                    {props.dataMeal ? (
                        props.dataMeal.meal_foods.map((mealFood) => (
                            <Meal key={mealFood.id}>
                                <MealName>
                                    <div>{mealFood.name}</div>
                                    <Gram>{mealFood.weight} г</Gram>
                                </MealName>

                                <>{mealFood.info.calories} ккал</>
                                {/* <div>
                                Калории: {mealFood.info.calories} <br />
                                Белки: {mealFood.info.protein} г <br />
                                Жиры: {mealFood.info.fat} г <br />
                                Углеводы: {mealFood.info.carbs} г <br />
                            </div> */}
                            </Meal>
                        ))
                    ) : (
                        <div>Нет данных о приеме пищи</div>
                    )}
                </FoodEaten>
            </Food>
            <Button
                $btnSquareSize='button--square--size-s'
                $btnWidth='m'
                $variant='primary'
                type='button'
                onClick={handleAddMoreClick}
            >
                ДОБАВИТЬ ЕЩЕ
            </Button>

            {isAdditionalModalActive && (
                <Modal
                    title={mealsTranslation[props.title]}
                    onClose={handleCloseAdditionalModal}
                    width='600px'
                    height='auto'
                >
                    <InputBox
                        value={props.value}
                        // value='Что вы ищите?'
                        onChange={props.onChange}
                        placeholder=''
                        imageSrc='/barcode.png'
                    />{' '}
                </Modal>
            )}
        </Modal>
    );
};
