import { FoodState } from '@/f_entities/food/type';
import { FoodAction } from './action';

const foodReducer = (state: FoodState, action: FoodAction): FoodState => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_IS_PUBLIC':
            return { ...state, isPublic: action.payload };
        case 'SET_PRODUCT_ID':
            const newProductsProductId = [...state.products];
            newProductsProductId[action.payload.index] = {
                ...newProductsProductId[action.payload.index],
                product_id: action.payload.value,
            };
            return { ...state, products: newProductsProductId };

        case 'SET_WEIGHT':
            const newProductsWeight = [...state.products];
            newProductsWeight[action.payload.index] = {
                ...newProductsWeight[action.payload.index],
                weight: action.payload.value,
            };
            return { ...state, products: newProductsWeight };
        case 'SET_INFO':
            return {
                ...state,
                info: {
                    ...state.info,
                    [action.payload.field]: action.payload.value,
                },
            };
        case 'SET_VALIDATION_ERRORS':
            return { ...state, validationErrors: action.payload };
        case 'RESET_VALIDATION_ERRORS':
            return {
                ...state,
                validationErrors: {
                    name: '',
                    products: state.products.map(() => ({
                        product_id: '',
                        weight: '',
                    })),
                    info: { protein: '', fat: '', carbs: '', calories: '' }, // Сбрасываем ошибки info
                },
            };
        default:
            return state;
    }
};

export { foodReducer };
