import { LoaderAfter, LoaderBefore, LoaderWrapper } from '../style';

export const LoaderTest = () => {
    return (
        <>
            <LoaderWrapper>
                <LoaderBefore />
                <LoaderAfter />
            </LoaderWrapper>
        </>
    );
};
