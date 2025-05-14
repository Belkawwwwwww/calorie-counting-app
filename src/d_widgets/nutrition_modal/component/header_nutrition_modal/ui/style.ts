import styled from "styled-components";
export type Props = {
    src: string | null;
}
export const Container = styled.div<Props>`
    border-radius: 8px;
    background-color: var(--color-text3);
    width: 100%;
    height: 130px;
    background-image: url(${(props) => props.src || ""});
    background-size: cover;
    background-position: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    position: relative;
`
export const TitleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 60px;
        height: 60px;
    }

`
export const StImage = styled.div`
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    float: right;
    display: flex;
    background-color: var(--color-text2);
    img{
        width: 23px;
        height: 23px;

    }
    &:hover {
        background-color: var(--color-text5);
    }
`
export const ImagePickerWrapper = styled.div`
  position: absolute; /* Абсолютное позиционирование */
  bottom: 4px; /* Отступ от низа */
  right: 4px; /* Отступ справа */
`;