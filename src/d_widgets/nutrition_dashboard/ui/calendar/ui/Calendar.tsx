import { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { Modal } from '@/g_shared/ui/modal';

const StyleCalendar = styled.div<{ src: string }>`
    width: 40px;
    height: 40px;
    background-image: url(${(props) => props.src});
    background-size: cover;
    background-position: center;
    cursor: pointer;
    @media (max-width: 780px) {
        width: 30px;
        height: 30px;
    }
    @media (max-width: 480px) {
        width: 25px;
        height: 25px;
    }
`;

const imageUrl = '/calendar.png';

export const Calendar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const handleCalendarClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleDateSelect = (date: Date) => {
        setSelectedDate(dayjs(date).format('DD.MM.YYYY')); // Форматируем дату с помощью Day.js
        handleModalClose();
    };

    return (
        <div>
            <StyleCalendar src={imageUrl} onClick={handleCalendarClick} />
            {isModalOpen && (
                <Modal onClose={handleModalClose} title='Выберите дату'>
                    <div>
                        {/* Элементы выбора даты */}
                        <button onClick={() => handleDateSelect(new Date())}>
                            Сегодня
                        </button>
                        <button
                            onClick={() =>
                                handleDateSelect(dayjs().add(1, 'day').toDate())
                            }
                        >
                            Завтра
                        </button>
                        <button
                            onClick={() =>
                                handleDateSelect(
                                    dayjs().add(-1, 'day').toDate()
                                )
                            }
                        >
                            Вчера
                        </button>
                    </div>
                    {selectedDate && <p>Выбранная дата: {selectedDate}</p>}{' '}
                    {/* Отображаем выбранную дату */}
                </Modal>
            )}
        </div>
    );
};
