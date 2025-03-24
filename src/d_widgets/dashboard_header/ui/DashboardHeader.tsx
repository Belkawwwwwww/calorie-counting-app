import { Calendar } from '@/d_widgets/calendar';
import { DateNow, Header } from './style';

export const DashboardHeader: React.FC = () => {
    return (
        <Header>
            <DateNow>Сегодня</DateNow>
            <Calendar />
        </Header>
    );
};
