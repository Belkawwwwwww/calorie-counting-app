import { CreateFoodInfo } from '@/f_entities/food/type';

export type State = {
    createFoodInfo: CreateFoodInfo;
};

export const initialState: State = {
    createFoodInfo: {
        name: '',
        products: [
            {
                weight: null,
                product_id: null,
            },
        ],
        info: {
            protein: null,
            fat: null,
            carbs: null,
            calories: null,
        },
    },
};
