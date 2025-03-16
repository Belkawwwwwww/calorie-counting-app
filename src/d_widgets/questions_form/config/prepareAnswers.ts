import { SurveyAnswers } from '@/f_entities/survey';

export const prepareAnswers = (answers: SurveyAnswers): SurveyAnswers => {
    return {
        ...answers,
        growth:
            typeof answers.growth === 'string'
                ? parseInt(answers.growth, 10)
                : answers.growth,
        weight:
            typeof answers.weight === 'string'
                ? parseInt(answers.weight, 10)
                : answers.weight,
        birthday:
            answers.birthday instanceof Date
                ? answers.birthday
                : answers.birthday
                  ? new Date(answers.birthday)
                  : null,
        waist_girth:
            typeof answers.waist_girth === 'string'
                ? parseInt(answers.waist_girth, 10)
                : answers.waist_girth,
        hip_girth:
            typeof answers.hip_girth === 'string'
                ? parseInt(answers.hip_girth, 10)
                : answers.hip_girth,
    };
};
