import { ValidationErrors } from '@/f_entities/food/type';

export type FoodAction =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_IS_PUBLIC'; payload: boolean }
    | { type: 'SET_PRODUCT_ID'; payload: { index: number; value: string } }
    | { type: 'SET_WEIGHT'; payload: { index: number; value: string } }
    | { type: 'SET_INFO'; payload: { field: string; value: string } }
    | { type: 'SET_VALIDATION_ERRORS'; payload: ValidationErrors }
    | { type: 'RESET_VALIDATION_ERRORS' };
