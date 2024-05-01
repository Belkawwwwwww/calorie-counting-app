import React, { FC } from 'react';

interface QuestionProps {
    question: string;
    options?: string[];
    selectedAnswer: string | null;
    onAnswer: (answer: string) => void;
    onNextQuestion: () => void;
}

export const QuestionComponent: FC<QuestionProps> = ({
    question,
    options,
    selectedAnswer,
    onAnswer,
    onNextQuestion
}) => {
    return (
        <div>
            <h1>{question}</h1>
            {options ? (
                options.map((option, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            id={option}
                            name="answer"
                            value={option}
                            checked={selectedAnswer === option}
                            onChange={() => onAnswer(option)}
                        />
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))
            ) : (
                <input
                    type="text"
                    value={selectedAnswer || ''}
                    onChange={(e) => onAnswer(e.target.value)}
                />
            )}
            <button onClick={onNextQuestion}>Следующий вопрос</button>
        </div>
    );
};
