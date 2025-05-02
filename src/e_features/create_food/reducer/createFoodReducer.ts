import { FoodState } from '@/f_entities/food/type';
import { FoodAction } from './action/foodAction';

const foodReducer = (state: FoodState, action: FoodAction): FoodState => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_IS_PUBLIC':
            return { ...state, isPublic: action.payload };
        case 'SET_INFO':
            return {
                ...state,
                info: { ...state.info, [action.payload.field]: action.payload.value },
            };


        case 'SET_VALIDATION_ERRORS':
            return { ...state, validationErrors: action.payload };
        case 'RESET_VALIDATION_ERRORS':
            return {
                ...state,
                validationErrors: {
                    name: '',
                    info: { protein: '', fat: '', carbs: '', calories: '' },

                },
            };
        default:
            return state;
    }
};

export { foodReducer };
