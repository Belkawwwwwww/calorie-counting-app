import { useLazySearchFood } from "@/e_features/search_food/hooks";
import { Food, Product } from "@/g_shared/lib/type/SearchType";
import { InputBox } from "@/g_shared/ui/input";
import { LoadingIndicator } from "@/g_shared/ui/loader";
import { FC, memo } from "react";
import { Props } from "../type";
import { NothingFound } from "@/g_shared/ui/nothing_found";
import { FoodProductList } from "@/g_shared/ui/food-selection";

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
            <InputBox
                value={searchTermLocal}
                onChange={handleInputChange}
                imageSrc='/barcode.png'
                type='text'
            />
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