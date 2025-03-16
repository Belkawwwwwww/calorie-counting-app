import { CreateFoodInfo } from '@/f_entities/food/type';

export type Action = {
    type: 'SET_CREATE_FOOD_INFO';
    key: keyof CreateFoodInfo;
    value: any;
};
