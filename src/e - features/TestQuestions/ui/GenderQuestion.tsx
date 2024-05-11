import React, { FC } from "react";
import {QuestionComponent} from "@/g - shared/components/question-component/QuestionComponent";

interface GenderQuestionProps {
    selectedAnswer: string | null;
    onAnswer: (answer: string) => void;
    onNextQuestion: () => void;
}

export const GenderQuestion: FC<GenderQuestionProps> = ({selectedAnswer, onAnswer, onNextQuestion,}) => {
    const options = ["Женщина", "Мужчина"];

    return (
        <QuestionComponent
            title="Какой у вас пол?"
            options={options}
            selectedAnswer={selectedAnswer}
            onAnswer={onAnswer}
            onNextQuestion={onNextQuestion}
        />
    );
};