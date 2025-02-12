import {
    ActivityLevelQuestion,
    DateOfBirthQuestion,
    GenderQuestion,
    GrowthQuestion,
    HipGirth,
    TargetQuestion,
    WaistGirth,
    WeightQuestion,
} from '@/d_widgets/test/ui';
import { RouteEnum } from '@/g_shared/model';
import { UIFormLayout } from '@/g_shared/ui/layout';
import { useRouter } from 'next/router';
import { Questions } from './style';
import {
    NextBtn,
    useCreateSurveyHandler,
    useSurvey,
} from '@/e_features/survey';

export const CreateQuestions = () => {
    const {
        currentQuestionIndex,
        currentQuestionAnswered,
        answers,
        handleAnswer,
        handleNext,
        setCurrentQuestionAnswered,
    } = useSurvey();
    const router = useRouter();
    const { loading, handleSubmit } = useCreateSurveyHandler(answers, () => {
        setTimeout(() => {
            router.push(RouteEnum.MAIN);
        }, 3000);
    });

    const questions = [
        {
            key: 'gender',
            title: 'ВАШ ПОЛ',
            component: (
                <GenderQuestion
                    selectedAnswer={answers.gender}
                    onAnswer={(answer) => handleAnswer('gender', answer)}
                />
            ),
        },
        {
            key: 'target',
            title: 'ВАША ЦЕЛЬ',
            component: (
                <TargetQuestion
                    selectedAnswer={answers.target}
                    onAnswer={(answer) => handleAnswer('target', answer)}
                />
            ),
        },
        {
            key: 'growth',
            title: 'ВВЕДИТЕ ВАШ РОСТ',
            component: (
                <GrowthQuestion
                    selectedAnswer={answers.growth}
                    onAnswer={(answer) => handleAnswer('growth', answer)}
                    onInputValidation={setCurrentQuestionAnswered}
                />
            ),
        },
        {
            key: 'birthday',
            title: 'ДАТА РОЖДЕНИЯ',
            component: (
                <DateOfBirthQuestion
                    selectedAnswer={answers.birthday}
                    onAnswer={(answer) => handleAnswer('birthday', answer)}
                    onInputValidation={setCurrentQuestionAnswered}
                />
            ),
        },

        {
            key: 'activity',
            title: 'КАКОЙ У ВАС ОБРАЗ ЖИЗНИ?',
            component: (
                <ActivityLevelQuestion
                    selectedAnswer={answers.activity}
                    onAnswer={(answer) => handleAnswer('activity', answer)}
                />
            ),
        },
        {
            key: 'weight',
            title: 'ВВЕДИТЕ ВАШЕ ВЕС',
            component: (
                <WeightQuestion
                    selectedAnswer={answers.weight}
                    onAnswer={(answer) => handleAnswer('weight', answer)}
                    onInputValidation={setCurrentQuestionAnswered}
                />
            ),
        },
        {
            key: 'waist_girth',
            title: 'ОБХВАТ ТАЛИИ',
            component: (
                <WaistGirth
                    selectedAnswer={answers.waist_girth}
                    onAnswer={(answer) => handleAnswer('waist_girth', answer)}
                    onInputValidation={setCurrentQuestionAnswered}
                />
            ),
        },
        {
            key: 'hip_girth',
            title: 'ОБХВАТ БЕДЕР',
            component: (
                <HipGirth
                    selectedAnswer={answers.hip_girth}
                    onAnswer={(answer) => handleAnswer('hip_girth', answer)}
                    onInputValidation={setCurrentQuestionAnswered}
                />
            ),
        },
    ];
    return (
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
                                                index === questions.length - 1
                                            }
                                            isAnswered={currentQuestionAnswered}
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
    );
};
