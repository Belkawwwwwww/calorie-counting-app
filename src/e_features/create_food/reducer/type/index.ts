import { FoodState } from '@/f_entities/food/type';

export const initialState: FoodState = {
    name: '',
    isPublic: false,
    info: { protein: '', fat: '', carbs: '', calories: '' },
    validationErrors: {
        name: '',
        info: { protein: '', fat: '', carbs: '', calories: '' },
    },
};
