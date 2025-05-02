import { SurveyAnswers } from '@/f_entities/survey';
import {
    ActivityLevelQuestion,
    DateOfBirthQuestion,
    GenderQuestion,
    GrowthQuestion,
    HipGirth,
    TargetQuestion,
    WaistGirth,
    WeightQuestion,
} from '@/g_shared/ui/test_questions';

export const getQuestionsConfig = (
    answers: SurveyAnswers,
    handleAnswer: (key: keyof SurveyAnswers, answer: any) => void,
    setCurrentQuestionAnswered: (isAnswered: boolean) => void
) => {
    return [
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
};
