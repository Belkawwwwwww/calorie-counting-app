import styled, { keyframes } from 'styled-components';

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const loaderAnimation = keyframes`
  20% { background-position: 0% 0%, 50% 50%, 100% 50% }
  40% { background-position: 0% 100%, 50% 0%, 100% 50% }
  60% { background-position: 0% 50%, 50% 100%, 100% 0% }
  80% { background-position: 0% 50%, 50% 50%, 100% 100% }
`;

export const Loader = styled.div`
  margin: auto;

  width: 35px;
  height: 20px;
  --_g: no-repeat radial-gradient(circle closest-side, var(--color-text4) 90%, #0000);
  background:
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: ${loaderAnimation} 1s infinite linear;
`;
