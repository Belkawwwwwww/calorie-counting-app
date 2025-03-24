export type Props = {
    product: { product_id: string; weight: string };
    id: number;
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string
    ) => void;
    validationErrors: {
        products?: { [key: number]: { product_id?: string; weight?: string } };
    };
};
