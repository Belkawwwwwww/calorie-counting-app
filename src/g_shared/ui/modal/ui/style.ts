import styled from 'styled-components';

export const Title = styled.p`
    text-align: center;
    margin-top: -17px;
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
    overflow: auto;
    flex-direction: column;
`;

export const ModalContent = styled.div<{
    width?: string;
    height?: string;
    maxHeight?: string;
}>`
    position: relative;
    background: white;
    border-radius: 8px;
    padding: 20px;
    width: ${(props) => props.width || 'auto'};
    height: auto;
    max-height: ${(props) => props.maxHeight || '80vh'};
    position: relative;
    overflow-y: auto;

    @media (max-width: 768px) {
        width: 500px !important;
    }

    @media (max-width: 480px) {
        width: auto !important;
    }
`;

export const CloseButton = styled.button`
    position: sticky;
    z-index: 2;
    top: 0px;
    left: 0px;
    background: transparent;
    border: none;
    cursor: pointer;
`;
export const CloseButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const NavbarModal = styled.div`
    display: flex;
    align-items: center;
    
`

