
import { AddedItem } from '@/g_shared/lib/type/AddedItemType';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type MealState = {
    addedItems: AddedItem[];
}


const initialState: MealState = {
    addedItems: [],
}
// Thunk для добавления элемента
export const addItemThunk = createAsyncThunk(
    'createOrUpdateMeal/addItem',
    async (item: AddedItem, { dispatch }) => {
        try {
            dispatch(addItem(item));
            return item;

        } catch (error: any) {
            console.error('Error adding item with weight:', error);
            throw new Error(error.message);
        }
    }

);
// Thunk для удаления элемента
export const deleteItemThunk = createAsyncThunk(
    'createOrUpdateMeal/deleteItem',
    async (index: number, { dispatch }) => {
        dispatch(deleteItem(index));
    }
);
//Thunk для очистки 
export const clearAddedItemsThunk = createAsyncThunk(
    'createOrUpdateMeal/clearAddedItems',
    async (_, { dispatch }) => {
        dispatch(clearAddedItems());
    }
);


export const createMealSlice = createSlice({
    name: 'createOrUpdateMeal',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<AddedItem>) => {
            state.addedItems = [...state.addedItems, action.payload];
        },
        deleteItem: (state, action: PayloadAction<number>) => {
            const indexToDelete = action.payload;

            if (indexToDelete >= 0 && indexToDelete < state.addedItems.length) {
                state.addedItems = [
                    ...state.addedItems.slice(0, indexToDelete),
                    ...state.addedItems.slice(indexToDelete + 1),
                ];
            } else {
                console.warn(`Недопустимый индекс для удаления: ${indexToDelete}`);
            }
        },
        clearAddedItems: (state) => {
            state.addedItems = [];
        },

    },
});

export const { addItem, deleteItem, clearAddedItems } =
    createMealSlice.actions;
export default createMealSlice.reducer;
