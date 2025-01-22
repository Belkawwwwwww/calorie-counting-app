import { LoadingInBtn } from '@/g_shared/ui/loader';
import { FC } from 'react';
import { Props } from '../type';
import { ResponsiveButton } from '../style';

export const NextBtn: FC<Props> = (props: Props) => {
    const renderNextButton = () => (
        <ResponsiveButton
            $variant='primary'
            type='submit'
            onClick={props.onNext}
        >
            ДАЛЕЕ
        </ResponsiveButton>
    );

    const renderSubmitButton = () => (
        <ResponsiveButton $variant='primary' type='submit'>
            {props.isLoading ? (
                <LoadingInBtn />
            ) : (
                'СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН'
            )}
        </ResponsiveButton>
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
