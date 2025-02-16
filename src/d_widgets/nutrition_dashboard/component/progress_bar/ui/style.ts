import styled from 'styled-components';

export const BJU = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 33.3%;
    @media (max-width: 480px) {
        flex: 0 0 27.3%;
        padding: 5px;
    }
`;
export const ProgressBarContainer = styled.div`
    width: 105px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px; // Закругление углов
    height: 5px; // Высота полосы прогресса
    margin-top: 5px;
    margin-bottom: 5px;
`;
export const ProgressBarFill = styled.div`
    height: 100%;
    border-radius: 5px; // Закругление углов заполненной части
`;
export const Consumed = styled.div`
    opacity: 50%;
    @media (max-width: 480px) {
        font-size: 10px;
    }
`;
