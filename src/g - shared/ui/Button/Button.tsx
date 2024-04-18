import {FC, memo} from "react";
import {ButtonProps} from "@/g - shared/ui/Button/types";
import styled from "styled-components";


const StyledButton = styled.button<ButtonProps>`
  padding: 15px 30px;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return '#89AC76';
      case 'secondary':
        return 'green';
      default:
        return 'gray';
    }
  }};
  font-size: ${(props) => {
    switch (props.$btnSquareSize) {
      case 'button--square--size-s':
        return '14px';
      case 'button--square--size-m':
        return '16px';
      default:
        return '14px';
    }
  }};
  width: ${(props) => {
    switch (props.$btnWidth) {
      case 's':
        return '140px';
      case 'm':
        return '400px';
      default:
        return '14px';
    }
  }};
`;

export const Button: FC<ButtonProps> = memo(({children, disabled, onClick, ...otherProps}) => {
  return (
      <StyledButton {...otherProps} disabled={disabled} onClick={onClick}>
        {children}
      </StyledButton>
  );
});

Button.displayName = 'Button';


