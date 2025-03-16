import { CreateFoodInfo } from '@/f_entities/food/type';

export type State = {
    createFoodInfo: CreateFoodInfo;
};

export const initialState: State = {
    createFoodInfo: {
        name: '',
        weight: undefined,
        product_id: undefined,
        protein: undefined,
        fat: undefined,
        carbs: undefined,
        calories: undefined,
    },
};
