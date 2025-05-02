import { Food, Product } from "@/g_shared/lib/type/SearchType";
import { FoodProductList } from "@/g_shared/ui/food-selection/ui/FoodProductList";
import { LoadingIndicator } from "@/g_shared/ui/loader";
import { NothingFound } from "@/g_shared/ui/nothing_found/ui/NothingFound";
import { SearchInput } from "@/g_shared/ui/search_input/ui/SearchInput";
import { FC, memo } from "react";
import { Props } from "../type";
import { useLazySearchFood } from "@/e_features/search_food/hooks";

export const SearchContent: FC<Props> = memo((props) => {
    const {
        data,
        searchTermLocal,
        isLoading,
        handleInputChange,
        resetSearch,
        hasSearchBeenPerformed,
        isDebouncing
    } = useLazySearchFood();
    const foodData: Food[] = data?.data?.food || [];
    const productData: Product[] = data?.data?.product || [];


    const showResults = hasSearchBeenPerformed && !isLoading;  // показывать результаты только если поиск был выполнен и загрузка завершена

    // Опред нужно ли показывать сообщение 
    const showNoResults = showResults && foodData.length === 0 && productData.length === 0;

    // Опред нужно ли показывать лоадер 
    const showInitialLoading = !hasSearchBeenPerformed && searchTermLocal.length > 0 && isDebouncing;

    return (
        <>
            <SearchInput value={searchTermLocal} onChange={handleInputChange} />
            {showInitialLoading || isLoading ? (
                <LoadingIndicator />
            ) : (
                showResults ? (
                    <>
                        {showNoResults ? (
                            <NothingFound />
                        ) : (
                            <FoodProductList
                                foodData={foodData}
                                productData={productData}
                                onItemClick={(item) => {
                                    props.onItemClick(item);
                                    resetSearch(); // очищаем поиск после выбора элемента
                                }}
                            />
                        )}
                    </>
                ) : null
            )}
        </>
    );
});