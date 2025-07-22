import { useAppDispatch, useAppSelector } from "@/g_shared/lib/store";
import { MealFood } from "@/g_shared/lib/type/nutritionTypes"
import { selectAddedItems } from "../model/selector";
import { useEffect, useRef } from "react";
import { AddedItem } from "@/g_shared/lib/type/AddedItemType";
import { FoodOrProduct } from "@/g_shared/lib/type/SearchType";
import { addItemThunk } from "../model/slice";

export type Props = {
    mealFoods: MealFood[] | undefined
}
export type Result = {
    addedItems: AddedItem[]
}
export const useInitializeAddedItems = ({ mealFoods }: Props): Result => {
    const dispatch = useAppDispatch();
    const addedItems = useAppSelector(selectAddedItems);
    const isInitialized = useRef(false);
    const previousMealFoods = useRef<MealFood[] | undefined>(undefined)

    useEffect(() => {
        if (mealFoods && !isInitialized.current && mealFoods !== previousMealFoods.current) {
            mealFoods.forEach(food => {
                const alreadyAdded = addedItems.some(item => item.id === food.id && item.type === food.type);
                if (!alreadyAdded) {
                    const addedItem: AddedItem = {
                        id: food.id,
                        type: food.type,
                        item: food as unknown as FoodOrProduct,
                        weight: food.weight
                    };
                    dispatch(addItemThunk(addedItem));
                }
            });
            isInitialized.current = true;
            previousMealFoods.current = mealFoods;
        }
    }, [mealFoods, addedItems]);

    return { addedItems }

}