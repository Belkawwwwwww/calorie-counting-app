import { CreateSurveyResponseSchema, surveyScheme } from './surveyScheme';

export type SurveyResponse = typeof CreateSurveyResponseSchema._output;
export type SurveyInput = typeof surveyScheme._input;
