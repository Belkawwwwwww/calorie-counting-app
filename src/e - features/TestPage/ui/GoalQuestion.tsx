// GoalQuestion.tsx
import React, {FC} from "react";

interface GoalQuestionProps {
    selectedAnswer: string | null;
    onAnswer: (answer: string) => void;
    onNextQuestion: () => void;
}

export const GoalQuestion: FC<GoalQuestionProps> = ({
                                                        selectedAnswer,
                                                        onAnswer,
                                                        onNextQuestion,
                                                    }) => {
    return (
        <div>
            <h1>Какая ваша главная цель?</h1>
            {/* Добавьте варианты ответов для вопроса о цели */}
            {selectedAnswer !== null && (
                <button onClick={onNextQuestion}>Следующий вопрос</button>
            )}
        </div>
    );
};