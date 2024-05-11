import React, {FC} from "react";
import {QuestionComponent} from "@/g - shared/components/question-component/QuestionComponent";

interface GoalQuestionProps {
    selectedAnswer: string | null;
    onAnswer: (answer: string) => void;
    onNextQuestion: () => void;
}

export const GoalQuestion: FC<GoalQuestionProps> = ({selectedAnswer, onAnswer, onNextQuestion,}) => {
    const options = ["Похудеть", "Поддержание веса", "Набрать вес"]
    return (
        <QuestionComponent title="Какая ваша цель?" options={options} selectedAnswer={selectedAnswer}
                           onAnswer={onAnswer} onNextQuestion={onNextQuestion}/>
    );
};