import { FoodProductList } from "@/g_shared/ui/food-selection/ui/FoodProductList";
import { useLazySearchFood } from "@/e_features/search_food/hooks/useLazySearchFood";
import { SearchInput } from "@/e_features/search_food/ui/SearchInput";
import { Food, FoodOrProduct, Product } from "@/g_shared/lib/type/SearchType";
import { LoadingIndicator } from "@/g_shared/ui/loader";
import { FC, memo } from "react";
export type Props = {
    onItemClick: (item: FoodOrProduct) => void;
    handleCloseAdditionalModal?: () => void;

}
export const SearchContent: FC<Props> = memo((props) => {
    const {
        data,
        searchTermLocal,
        isLoading,
        handleInputChange,
    } = useLazySearchFood();
    const foodData: Food[] = data?.data?.food || [];
    const productData: Product[] = data?.data?.product || [];


    return (
        <>
            <SearchInput
                value={searchTermLocal}
                onChange={handleInputChange} />
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                <FoodProductList
                    foodData={foodData}
                    productData={productData}
                    onItemClick={props.onItemClick}
                />
            )}
        </>
    );
});
