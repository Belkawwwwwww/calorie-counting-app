import { FoodInfo, ValidationErrors } from "@/f_entities/food/type";
import { FoodOrProduct } from "@/g_shared/lib/type/SearchType";

export type Props = {
    modalState: { search: boolean; info: boolean };
    handleAddMoreClick: (item: FoodOrProduct) => void;
    info?: FoodInfo;
    handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>, name: string) => void;
    validationErrors?: ValidationErrors;
    setModalState: React.Dispatch<React.SetStateAction<{ search: boolean; info: boolean }>>;
    showInfoInput: boolean;
    searchLabel: string;
}