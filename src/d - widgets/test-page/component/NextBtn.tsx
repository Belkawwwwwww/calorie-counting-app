import { Button } from '@/g - shared/ui/button';
import { LoadingInBtn } from '@/g - shared/ui/loader';
import { FC } from 'react';

type Props = {
    isLastQuestion: boolean;
    isAnswered: boolean;
    onNext: () => void;
    isLoading: boolean;
};

export const NextBtn: FC<Props> = (props) => {
    const renderNextButton = () => (
        <Button
            $variant='primary'
            $btnWidth='l'
            $btnSquareSize='button--square--size-m'
            type='button'
            onClick={props.onNext}
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
            {props.isLoading ? (
                <LoadingInBtn />
            ) : (
                'СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН'
            )}
        </Button>
    );

    return (
        <>
            {props.isAnswered && !props.isLastQuestion
                ? renderNextButton()
                : null}
            {props.isLastQuestion && props.isAnswered
                ? renderSubmitButton()
                : null}
        </>
    );
};
