import { CreateSurveyResponseSchema, dataScheme } from '../model/createSurvey';

export type SurveyResponse = typeof CreateSurveyResponseSchema._output;
export type SurveyInput = typeof dataScheme._input;
