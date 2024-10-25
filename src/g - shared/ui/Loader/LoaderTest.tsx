import styled from "styled-components";

const StyledLoader = styled.span`
    position: relative;
    width: 78px;
    height: 78px;
    border-radius: 50%;
    box-sizing: border-box;
    background: #fff;
    border: 8px solid #131a1d;
    overflow: hidden;
    box-sizing: border-box
    `

export const LoaderTest = () => {
    return (
        <>
            <>Собираем информацию </>
            <>Почти всё готово</>
            <StyledLoader/>
        </>
    );
};
