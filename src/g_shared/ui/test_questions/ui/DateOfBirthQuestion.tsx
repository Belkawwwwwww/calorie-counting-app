import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useZodInputValidation } from '@/g_shared/lib/hooks';
import { surveyScheme } from '@/f_entities/survey';

const Block = styled.div`
    display: flex;
    justify-content: center;
`;
const Select = styled.select`
    width: 120px;
    height: 40px;
    @media (max-width: 780px) {
        width: 120px;
    }
    @media (max-width: 480px) {
        width: 100px;
    }
`;

export const DateOfBirthQuestion: FC<Props> = (props) => {
    const { handleInputChange } = useZodInputValidation(
        surveyScheme.shape.birthday
    );
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();

    const years = Array.from(
        { length: currentYear - 1949 },
        (_, i) => currentYear - i
    );

    const months = [
        { value: 1, label: 'Январь' },
        { value: 2, label: 'Февраль' },
        { value: 3, label: 'Март' },
        { value: 4, label: 'Апрель' },
        { value: 5, label: 'Май' },
        { value: 6, label: 'Июнь' },
        { value: 7, label: 'Июль' },
        { value: 8, label: 'Август' },
        { value: 9, label: 'Сентябрь' },
        { value: 10, label: 'Октябрь' },
        { value: 11, label: 'Ноябрь' },
        { value: 12, label: 'Декабрь' },
    ];

    const handleBirthdayChange = () => {
        const month = parseInt(selectedMonth);
        const day = parseInt(selectedDay);
        const year = parseInt(selectedYear);

        if (!isNaN(month) && !isNaN(day) && !isNaN(year)) {
            const birthdayDate = new Date(year, month, day);

            handleInputChange({
                target: { value: birthdayDate.toISOString() },
            } as React.ChangeEvent<HTMLInputElement>);
            props.onAnswer(birthdayDate.toISOString());
        }
    };
    // Обновляем состояние при каждом изменении селекторов
    useEffect(() => {
        if (selectedMonth && selectedDay && selectedYear) {
            handleBirthdayChange();
        }
    }, [selectedMonth, selectedDay, selectedYear]);

    return (
        <Block>
            <Select
                value={selectedMonth !== null ? selectedMonth : ''}
                onChange={(e) => {
                    setSelectedMonth(e.target.value);
                    handleBirthdayChange;
                }}
            >
                <option value='' disabled>
                    Месяц
                </option>
                {months.map((month) => (
                    <option key={month.value} value={month.value}>
                        {month.label}
                    </option>
                ))}
            </Select>
            <Select
                value={selectedDay !== null ? selectedDay : ''}
                onChange={(e) => {
                    setSelectedDay(e.target.value);
                    handleBirthdayChange;
                }}
            >
                <option value='' disabled>
                    День
                </option>
                {days.map((day) => (
                    <option key={day} value={day}>
                        {day}
                    </option>
                ))}
            </Select>
            <Select
                value={selectedYear !== null ? selectedYear : ''}
                onChange={(e) => {
                    setSelectedYear(e.target.value);
                    handleBirthdayChange;
                }}
            >
                <option value='' disabled>
                    Год
                </option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </Select>
        </Block>
    );
};
