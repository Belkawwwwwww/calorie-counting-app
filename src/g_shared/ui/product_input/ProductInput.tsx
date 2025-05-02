import { FC } from 'react';
import { InputBox } from '../input';
import { Props } from './type';
import { FoodTransition } from '@/g_shared/lib/utils';

export const ProductInput: FC<Props> = (props) => (
    <div>
      
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
