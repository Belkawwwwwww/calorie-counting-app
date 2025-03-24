import { FoodState } from '@/f_entities/food/type';

export const initialState: FoodState = {
    name: '',
    isPublic: false,
    products: [{ product_id: '', weight: '' }],
    info: { protein: '', fat: '', carbs: '', calories: '' },
    validationErrors: {
        name: '',
        products: [],
        info: { protein: '', fat: '', carbs: '', calories: '' },
    },
};
