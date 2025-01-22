import { useError } from '@/g_shared/lib/context';
import { StyledError } from '../style';

export const Error = () => {
    const { error } = useError();

    return <>{error ? <StyledError>{error}</StyledError> : null}</>;
};
