import React from 'react';
import { Header } from './style';
import { MaterialDatePicker } from '@/d_widgets/calendar';

export const DashboardHeader: React.FC = () => {
    return (
        <Header>
            <MaterialDatePicker />
        </Header>
    );
};