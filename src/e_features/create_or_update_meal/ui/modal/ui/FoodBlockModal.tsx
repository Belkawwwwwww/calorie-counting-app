import { useCreateOrUpdateMeal } from "@/e_features/create_or_update_meal/hooks";
import { formatMealData } from "@/e_features/create_or_update_meal/lib";
import { clearAddedItemsThunk } from "@/e_features/create_or_update_meal/model/slice/createOrUpdateMealSlice";
import { useError, useMealDataContext } from "@/g_shared/lib/context";
import { useAppDispatch, useAppSelector } from "@/g_shared/lib/store";
import { FoodBlock, MealData } from "@/g_shared/lib/type/createOrUpdateTypes";
import { mealsTranslation } from "@/g_shared/lib/utils";
import { CreateOrUpdateMealSchema } from "@/g_shared/schema/createOrUpdateMealSchema";
import { AddButton } from "@/g_shared/ui/add_meal_button";
import { Error } from "@/g_shared/ui/error_display";
import { LoadingIndicator } from "@/g_shared/ui/loader";
import { Modal } from "@/g_shared/ui/modal";
import { FC } from "react";
import { toast } from 'react-toastify';
import { FoodBlocks } from "../../../components/block_food";
import { selectAddedItems } from "../../../model/selector";
import { Props } from "../type";

export const FoodBlockModal: FC<Props> = (props) => {
    const { formattedDate } = useMealDataContext();
    const addedItems = useAppSelector(selectAddedItems);
    const { setError, clearError } = useError();
    const { createOrUpdateMeal, isLoading } = useCreateOrUpdateMeal();
    const dispatch = useAppDispatch();
    const { refetch } = useMealDataContext();


    const handleSubmit = async () => {
        clearError('createOrUpdateMeal');
        if (addedItems.length > 0) {
            const foodBlocks: FoodBlock[] = addedItems.map(item => ({
                type: item.type,
                id: item.item.id,
                weight: item.weight,
            }));

            const mealData: MealData = formatMealData({
                day: formattedDate,
                meal_type: props.mealType,
                food: foodBlocks,
            });

            try {
                CreateOrUpdateMealSchema.parse(mealData);
                await createOrUpdateMeal(mealData).unwrap();

                if (props.onSuccess) {
                    props.onSuccess();
                }
                toast.success(`${mealsTranslation[props.mealType]} УСПЕШНО СОЗДАН`, {
                    autoClose: 3000,
                });
                refetch();
                dispatch(clearAddedItemsThunk());
            } catch (error) {
                setError('createOrUpdateMeal', 'Произошла ошибка при создании');
            }
        } else {
            if (props.onSuccess) {
                props.onSuccess();
            }
        }
    };
    if (isLoading) {
        return <LoadingIndicator />
    }


    return (
        <>
            {props.isOpen ? (
                <Modal title={props.modalTitle} onClose={props.onClose} width='400px' height='auto'>
                    <FoodBlocks
                        mealType={props.mealType}
                        item={props.item}
                        handleCloseAdditionalModal={props.onItemAdded}
                    />
                    <Error keyName='createOrUpdateMeal' absolute={false} />
                </Modal>
            ) : null}
            <AddButton onClick={handleSubmit} text='ГОТОВО' />
        </>
    )
}
