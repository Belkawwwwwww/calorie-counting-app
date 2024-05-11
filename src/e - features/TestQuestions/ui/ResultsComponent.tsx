import React, {FC} from 'react';

interface ResultsProps {
    answers: string[];
}

export const ResultsComponent: FC<ResultsProps> = ({ answers }) => {
    return (
        <div>
            <h1>Тест завершен!</h1>
            <h2>Ответы:</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                ))}
            </ul>
        </div>
    );
};
