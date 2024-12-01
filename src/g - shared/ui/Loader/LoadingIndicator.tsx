import styled, { keyframes } from 'styled-components';

const Loading = styled.div`
    display: flex;
    align-items: center;
`;

const loaderAnimation = keyframes`
  0% {
    box-shadow: -10px 0, 10px 0, 0 -10px;
  }
  33% {
    box-shadow: -10px -10px, 10px 0, 0 10px;
  }
  66% {
    box-shadow: -10px 0, -10px 10px, -10px -10px;
  }
  100% {
    box-shadow: 10px 0, 0 -10px, -10px 0;
  }
`;

const Loader = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: block;
    margin: 5px auto;
    position: relative;
    color: white;
    box-sizing: border-box;
    animation: ${loaderAnimation} 1s linear infinite alternate;
`;

export const LoadingIndicator = () => {
    return (
        <Loading>
            <Loader></Loader>
        </Loading>
    );
};
