import styled from 'styled-components';

export const StyledSVG = styled.svg`
    width: 165px; 
    height: 150px;
`;
export const Circle = styled.circle`
    fill: transparent;
    stroke-width: 5;
    stroke: rgba(255, 255, 255, 0.5);
    /* stroke: var(--color-text2); */
`
export const ProgressCircle = styled.circle<{ $fillPercent: number; $isOverkill: boolean; radius: number }>`
  fill: transparent;
  stroke-width: 5;
  stroke: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : 'var(--color-text2)')};
  stroke-dasharray: ${({ radius }) => 2 * Math.PI * radius};
  stroke-dashoffset: ${({ $fillPercent, radius }) => (2 * Math.PI * radius) - ((2 * Math.PI * radius) * $fillPercent) / 100};
  transform: rotate(90deg);
  transform-origin: center;
`;
export const MovingCircle = styled.circle<{ $fillPercent: number; $isOverkill: boolean }>`
    fill: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : 'blue')}; // Цвет шарика
    r: 8;  // Радиус шарика
    cx: 75; // Центр круга (x)
    cy: 75; // Центр круга (y)
    transform-origin: center;
    transform: rotate(${({ $fillPercent }) => $fillPercent * 3.6}deg) translate(67px); // 3.6 градуса на процент заполнения
`;
export const CaloriesText = styled.text`
  font-size: 30px;
  fill: black;
  text-anchor: middle;
  alignment-baseline: middle;
  font-weight: bold;
`;
export const Circle1 = styled.div<{ $isOverkill?: boolean }>`
    border: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : 'var(--color-text2)')} solid
        5px;
    border-radius: 50%;
    padding: 13px 20px;
    text-align: center;
    width: 125px;
    height: 125px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 480px) {
        width: 100px;
        height: 100px;
    }
`;

export const Text = styled.text`
    font-size: 11px;
    text-anchor: middle;
    alignment-baseline: middle;
`;

export const Significance = styled.div<{ $isOverkill?: boolean }>`
    font-size: 30px;
    font-weight: bold;
    color: ${({ $isOverkill }) => ($isOverkill ? '#b56d5b' : 'inherit')};
    @media (max-width: 480px) {
        font-size: 25px;
    }
`;
export const BoxCircle = styled.div`
    flex: 0 0 33.3%;
    padding-left: 24px;
    @media (max-width: 480px) {
        padding-left: 20px;
    }
    @media (max-width: 320px) {
        padding-left: 17px;
    }
`;
