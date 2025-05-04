import styled, { keyframes } from 'styled-components';

export const animloader = keyframes`
  0% {
    box-shadow: -38px -12px, -14px 0, 14px 0, 38px 0;
  }
  33% {
    box-shadow: -38px 0, -14px -12px, 14px 0, 38px 0;
  }
  66% {
    box-shadow: -38px 0, -14px 0, 14px -12px, 38px 0;
  }
  100% {
    box-shadow: -38px 0, -14px 0, 14px 0, 38px -12px;
  }
`;

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Loader = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: block;
    margin: 15px auto;
    position: relative;
    color: var(--color-text4);
    box-sizing: border-box;
    animation: ${animloader} 1s linear infinite alternate;
`;
