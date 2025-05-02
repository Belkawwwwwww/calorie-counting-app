import { FoodOrProduct } from "./SearchType";

export type AddedItem = {
    id: number;
    type: 'product' | 'food';
    item: FoodOrProduct; 
    weight: number;
};