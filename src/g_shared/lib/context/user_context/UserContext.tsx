import { createContext, useState, useContext, FC } from 'react';
import { Props, UserContextType } from './type';

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<Props> = (props: Props) => {
    const [dailyCalories, setDailyCalories] = useState(0);

    const updateDailyCalories = (calories: number) => {
        setDailyCalories(calories);
    };

    return (
        <UserContext.Provider value={{ dailyCalories, updateDailyCalories }}>
            {props.children}
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
