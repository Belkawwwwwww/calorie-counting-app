import { useState } from "react"

export const useSurvey = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentQuestionAnswered, setCurrentQuestionAnswered] = useState(false)
    const [answers, setAnswers] = useState<{
        gender: string | null;
        target: string | null;
        age: number | null;
        growth: number | null;
        birthday: Date | null;
        activity: string | null;
        weight: number | null;
    }>({
        gender: null,
        target: null,
        age: null,
        growth: null,
        birthday: null,
        activity: null,
        weight: null,
    });
    const handleAnswer = (
        key: keyof typeof answers,
        value: (typeof answers)[keyof typeof answers]
    ) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [key]: value,
        }));
        setCurrentQuestionAnswered(true);
    };
    const handleNext = () => {
        setCurrentQuestionAnswered(false);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };
    return {
        currentQuestionIndex, currentQuestionAnswered, answers, handleAnswer, handleNext, setAnswers
    }
}