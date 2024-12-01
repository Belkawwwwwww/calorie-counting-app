import { Button } from '@/g - shared/ui/button';
import { LoadingInBtn } from '@/g - shared/ui/loader';
import { FC } from 'react';

type Props = {
    isLastQuestion: boolean;
    isAnswered: boolean;
    onNext: () => void;
    isLoading: boolean;
};

export const NextBtn: FC<Props> = ({
    isLastQuestion,
    isAnswered,
    onNext,
    isLoading,
}) => {
    const renderNextButton = () => (
        <Button
            $variant='primary'
            $btnWidth='l'
            $btnSquareSize='button--square--size-m'
            type='button'
            onClick={onNext}
        >
            ДАЛЕЕ
        </Button>
    );

    const renderSubmitButton = () => (
        <Button
            $variant='primary'
            $btnWidth='l'
            $btnSquareSize='button--square--size-m'
            type='submit'
        >
            {isLoading ? <LoadingInBtn /> : 'СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН'}
        </Button>
    );

    return (
        <>
            {isAnswered && !isLastQuestion ? renderNextButton() : null}
            {isLastQuestion && isAnswered ? renderSubmitButton() : null}
        </>
    );
};