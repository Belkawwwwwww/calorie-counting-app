import { Action } from './action';
import { State } from './type';

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_CREATE_FOOD_INFO': {
            const { key, value } = action;
            return {
                ...state,
                createFoodInfo: {
                    ...state.createFoodInfo,
                    [key]: value,
                },
            };
        }
        default:
            return state;
    }
};

export { reducer };
