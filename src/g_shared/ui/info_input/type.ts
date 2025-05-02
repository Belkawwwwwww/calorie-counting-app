export type Props = {
    info: { protein: string; fat: string; carbs: string; calories: string };
    handleInputChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        field: string
    ) => void;
    validationErrors: {
        info?: {
            protein?: string ;
            fat?: string ;
            carbs?: string ;
            calories?: string ;
        };
    };
};
