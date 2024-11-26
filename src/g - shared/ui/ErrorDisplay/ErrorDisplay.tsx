import { useError } from '@/g - shared/lib/context';
import styled from 'styled-components';

const StyledError = styled.div`
    color: red;
`;
export const Error = () => {
    const { error } = useError();

    return <>{error ? <StyledError>{error}</StyledError> : null}</>;
};
