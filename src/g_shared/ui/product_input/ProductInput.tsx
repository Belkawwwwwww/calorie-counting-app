import { FC } from 'react';
import { InputBox } from '../input';
import { Props } from './type';
import { FoodTransition } from '@/g_shared/lib/utils';

export const ProductInput: FC<Props> = (props) => (
    <div>
        <InputBox
            type='number'
            data-index={props.id}
            value={props.product.product_id}
            onChange={(e) => props.handleInputChange(e, 'product_id')}
            useUnframedInput={true}
            placeholder='ОБЯЗАТЕЛЬНО'
            id={`product_id_${props.id}`}
            label={FoodTransition.product_id}
            error={props.validationErrors.products?.[props.id]?.product_id}
        />
        <InputBox
            type='number'
            data-index={props.id}
            value={props.product.weight}
            onChange={(e) => props.handleInputChange(e, 'weight')}
            useUnframedInput={true}
            placeholder='НЕОБЯЗАТЕЛЬНО'
            id={`weight_${props.id}`}
            label={FoodTransition.weight}
            error={props.validationErrors.products?.[props.id]?.weight}
        />
    </div>
);
