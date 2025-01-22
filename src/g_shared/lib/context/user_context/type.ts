export type UserContextType = {
    dailyCalories: number;
    updateDailyCalories: (calories: number) => void;
};

export type Props = {
    children: React.ReactNode;
};
