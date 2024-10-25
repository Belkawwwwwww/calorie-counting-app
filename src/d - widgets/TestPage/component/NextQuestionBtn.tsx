import { Button } from '@/g - shared/ui/Button';
import { LoadingInBtn } from '@/g - shared/ui/Loader/LoaderInBtn';
import { FC } from 'react';

interface NextBtnProps {
    isLastQuestion: boolean;
    isAnswered: boolean;
    onNext: () => void;
    isLoading: boolean;
}

export const NextBtn: FC<NextBtnProps> = ({
    isLastQuestion,
    isAnswered,
    onNext,
    isLoading,
}) => {
    return (
        <>
            {isAnswered && !isLastQuestion  ? (
                <Button
                    $variant='primary'
                    $btnWidth='l'
                    $btnSquareSize='button--square--size-m'
                    type='button'
                    onClick={onNext}
                >
                    СЛЕДУЮЩИЙ ВОПРОС
                </Button>
            ) : isLastQuestion && isAnswered ? (
                <Button
                    $variant='primary'
                    $btnWidth='l'
                    $btnSquareSize='button--square--size-m'
                    type='submit'
                >
                    {isLoading ? (
                        <LoadingInBtn />
                    ) : (
                        'СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН'
                    )}
                </Button>
            ) : null}
        </>
    );
};
