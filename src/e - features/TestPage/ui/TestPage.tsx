import React, {FC, useState} from "react";
import {GenderQuestion} from "./GenderQuestion";
import {GoalQuestion} from "./GoalQuestion";
import {QuestionComponent} from "./QuestionComponent";
import {ResultsComponent} from "./ResultsComponent";
import {Layout} from "@/g - shared/ui/layout";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  text-align: center;
`
export const Test: FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);

    const questions: { question: string; options?: string[] }[] = [
        {
            question: "Какой у вас пол?",
        },
        {
            question: "Какая ваша главная цель?",
        },
        {
            question: "Какой у Вас рост?",
        },
        {
            question: "Какой у вас вес?",
        },
        {
            question: "Укажите дату рождения",
        },
        {
            question: "Укажите уровень активности",
            options: ["Сидячий образ жизни", "Умеренно активный", "Активный", "Высокая активность"],
        },
    ];

    const handleAnswer = (answer: string) => {
        setSelectedAnswer(answer);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer !== null) {
            const updatedAnswers = [...answers, selectedAnswer];
            setAnswers(updatedAnswers);
            setSelectedAnswer(null);
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    return (
        <Layout>
            <StyledContainer>
                {currentQuestion < questions.length ? (
                    currentQuestion === 0 ? (
                        <GenderQuestion
                            selectedAnswer={selectedAnswer}
                            onAnswer={handleAnswer}
                            onNextQuestion={handleNextQuestion}
                        />
                    ) : currentQuestion === 1 ? (
                        <GoalQuestion
                            selectedAnswer={selectedAnswer}
                            onAnswer={handleAnswer}
                            onNextQuestion={handleNextQuestion}
                        />
                    ) : (
                        <QuestionComponent
                            question={questions[currentQuestion].question}
                            options={questions[currentQuestion].options}
                            selectedAnswer={selectedAnswer}
                            onAnswer={handleAnswer}
                            onNextQuestion={handleNextQuestion}
                        />
                    )
                ) : (
                    <ResultsComponent answers={answers}/>
                )}
            </StyledContainer>

        </Layout>
    );
};