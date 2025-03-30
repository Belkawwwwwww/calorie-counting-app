import { UIFormLayout } from '@/g_shared/ui/layout';
import { LoaderTest } from '@/g_shared/ui/loader';
import { FC } from 'react';
import { Questions, Title } from './style';
import { NextBtn } from '@/g_shared/ui/next_btn';
import { useSurveyDataHandler } from '@/e_features/survey/hooks/useSurveyDataHandler';

export const QuestionForm: FC = () => {
    const {
        questions,
        currentQuestionIndex,
        currentQuestionAnswered,
        handleNext,
        handleSubmit,
        loading,
    } = useSurveyDataHandler();
    return (
        <>
            {loading ? (
                <>
                    <Title>УЖЕ ПОЧТИ ВСЕ ГОТОВО</Title>
                    <LoaderTest />
                </>
            ) : (
                <>
                    <Title>СОЗДАТЬ СВОЙ ПЕРСОНАЛЬНЫЙ ПЛАН</Title>
                    <Questions>
                        <form onSubmit={handleSubmit}>
                            {questions.map((question, index) => (
                                <div key={question.key}>
                                    {index === currentQuestionIndex ? (
                                        <UIFormLayout
                                            key={question.title}
                                            content='center'
                                            title={question.title}
                                            form={question.component}
                                            nextButton={
                                                currentQuestionAnswered ? (
                                                    <NextBtn
                                                        isLastQuestion={
                                                            index ===
                                                            questions.length - 1
                                                        }
                                                        isAnswered={
                                                            currentQuestionAnswered
                                                        }
                                                        onNext={handleNext}
                                                        isLoading={loading}
                                                    />
                                                ) : null
                                            }
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </form>
                    </Questions>
                </>
            )}
        </>
    );
};
