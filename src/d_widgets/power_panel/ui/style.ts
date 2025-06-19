import styled from 'styled-components';
export const StyledSummaryBlock = styled.div`
    background-color: var(--color-text4);
    border-radius: 8px;
    width: 100%;
    max-width: 500px;
    height: auto;
    margin: 0 auto;
    color: black;
    padding-bottom: 10px;
    @media (max-width: 768px) {
        height: auto;
    }

    @media (max-width: 480px) {
        height: auto;
    }
`;

export const FirstBlock = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 480px) {
        padding-top: 20px;

    }
    @media (max-width: 320px) {
        padding-top: 25px;
        flex-wrap: nowrap;
        width: 217px;
    }
`;
export const Calories = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 33.3%;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 320px) {
        padding-left: 15px;
    }
`;
export const BZU = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;

    @media (max-width: 780px) {
        padding-bottom: 10px;
    }

    @media (max-width: 480px) {
        padding-top: 10px;
        flex-direction: row;
        justify-content: center;
        
    }
    @media (max-width: 320px) {
        padding-top: 10px;
        justify-content: center;
    }
`;

export const Norm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex: 0 0 33.3%;
`;

export const Purpose = styled.div`
    font-size: 15px;
    opacity: 50%;
    padding-top: 5px;
    @media (max-width: 480px) {
        font-size: 10px;
    }
`;
export const Cel = styled.div`
    font-size: 18px;
    @media (max-width: 480px) {
        font-size: 15px;
    }
`;
export const PowerPanelContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative; /* Для позиционирования изображения */
  width: 100%;
  /* max-width: 700px;  */
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Центрируем по вертикали в мобильной версии */
  }
`;