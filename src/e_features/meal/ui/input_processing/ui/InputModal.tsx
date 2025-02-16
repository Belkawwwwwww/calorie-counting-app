import { Button } from '@/g_shared/ui/button';
import { InputBox } from '@/g_shared/ui/input';
import { Modal } from '@/g_shared/ui/modal';
import { FC } from 'react';
import { Props } from '../type';
import { mealsTranslation } from '@/g_shared/lib/utils/translation';

export const InputModal: FC<Props> = (props) => {
    return (
        <Modal
            title={mealsTranslation[props.title]}
            onClose={props.onClose}
            width='600px'
            height='auto'
        >
            {props.mealInfo ? (
                <>
                    <p>Белки: {Math.ceil(props.mealInfo.protein)}г</p>
                    <p>Жиры: {Math.ceil(props.mealInfo.fat)}г</p>
                    <p>Углеводы: {Math.ceil(props.mealInfo.carbs)}г</p>
                    <p>Калории: {props.mealInfo.calories} ккал</p>
                </>
            ) : null}

            <InputBox value={props.value} onChange={props.onChange} />
            <Button
                $btnSquareSize='button--square--size-s'
                $btnWidth='m'
                $variant='primary'
                type='button'
            >
                ДОБАВИТЬ ЕЩЕ
            </Button>
        </Modal>
    );
};
