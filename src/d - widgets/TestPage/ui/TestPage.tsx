import React, {FC, useState} from "react";
import {GenderQuestion} from "@/e - features/TestQuestions/ui/GenderQuestion";
import {GoalQuestion} from "@/e - features/TestQuestions/ui/GoalQuestion";
import {ResultsComponent} from "@/e - features/TestQuestions/ui/ResultsComponent";
import {Layout} from "@/g - shared/ui/layout";
import styled from "styled-components";
import {QuestionComponent} from "@/g - shared/components/question-component/QuestionComponent";
import {GrowthQuestion} from "@/e - features/TestQuestions/ui/GrowthQuestion";
import {WeightQuestion} from "@/e - features/TestQuestions/ui/WeightQuestion";
import {DateOfBirthQuestion} from "@/e - features/TestQuestions/ui/DateOfBirthQuestion";
import {ActivityLevelQuestion} from "@/e - features/TestQuestions/ui/ActivityLevelQuestion";

interface Question {
    question: string;
    options?: string[];
}

const StyledContainer = styled.div`
  display: flex;
  margin-top: 60px;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`;
export const Test: FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);

    const questions: Question[] = [
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
            question: "Насколько вы активны?",
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

    const questionProps = {
        title: questions[currentQuestion]?.question || "",
        options: questions[currentQuestion]?.options || [],
        selectedAnswer,
        onAnswer: handleAnswer,
        onNextQuestion: handleNextQuestion,
    };

    return (
        <Layout>
            <StyledContainer>
                {currentQuestion < questions.length ? (
                    currentQuestion === 0 ? (
                        <GenderQuestion {...questionProps} />
                    ) : currentQuestion === 1 ? (
                        <GoalQuestion {...questionProps} />
                    ) : currentQuestion === 2 ? (
                        <GrowthQuestion {...questionProps} />
                    ) : currentQuestion === 3 ? (
                        <WeightQuestion {...questionProps} />
                    ) : currentQuestion === 4 ? (
                        <DateOfBirthQuestion {...questionProps} />
                    ) : currentQuestion === 5 ? (
                        <ActivityLevelQuestion {...questionProps} />
                    ) : (
                        <QuestionComponent {...questionProps} />
                    )
                ) : (
                    <ResultsComponent answers={answers}/>
                )}
            </StyledContainer>
        </Layout>
    );
};