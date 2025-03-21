import styled from 'styled-components';

export const Title = styled.p`
    text-align: center;
    margin-top: -10px;
    margin-bottom: 5px;
`;
export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div<{ width?: string; height?: string }>`
    background: white;
    border-radius: 8px;
    padding: 20px;
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    position: relative;
    @media (max-width: 768px) {
        width: 500px !important;
        height: auto !important;
    }
    @media (max-width: 480px) {
        width: auto !important;
        height: auto !important;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
`;
