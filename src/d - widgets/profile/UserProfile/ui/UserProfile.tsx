import styled from 'styled-components';

const StyledUserProfile = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 300px;
    background-color: var(--color-background1);
    border-radius: 8px;
    color: white;
    display: flex;
    /* justify-content: center; */
    /* padding: 100px 30px 30px 30px; */
`;
const StyledAboutProfile = styled.div`
    /* padding: 100px 30px 30px 30px; */
`;
const StyledUsername = styled.div`
    font-weight: 200;
    font-size: 30px;
`;
const StyledMain = styled.div`
    display: flex;
`;

export const UserProfile = () => {
    return (
        <StyledUserProfile>
            <StyledAboutProfile>
                <>фото</>
                <StyledUsername>Алена Белокрылова</StyledUsername>
            </StyledAboutProfile>
            <StyledMain>
                <>27 лет</>
                <>Набрать вес</>
                <>ккал осталось</>
            </StyledMain>
        </StyledUserProfile>
    );
};
