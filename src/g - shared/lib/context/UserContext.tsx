import { createContext, useState, useContext, FC, ReactNode } from 'react';

interface UserContextType {
    dailyCalories: number;
    updateDailyCalories: (calories: number) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const [dailyCalories, setDailyCalories] = useState(0);

    const updateDailyCalories = (calories: number) => {
        setDailyCalories(calories);
    };

    return (
        <UserContext.Provider value={{ dailyCalories, updateDailyCalories }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('');
    }
    return context;
};
