import React, { useState } from 'react';
import styled from 'styled-components';
import {
    Container,
    QuestionNumber,
    QuestionText,
    Options,
    OptionButton,
    CurrentPosition,
} from './LiteracyTestScreen.Style';

const LiteracyTestScreen: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0); // 현재 문제 인덱스
    const [questions] = useState([
        {
            question: '문제1',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '문제2',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '문제3',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '문제4',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '문제5',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '문제6',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '문제7',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '문제8',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '문제',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
        {
            question: '문제10',
            options: ['선택지1', '선택지2', '선택지3', '선택지4'],
        },
    ]);

    const handleNextQuestion = (optionIndex: number) => {
        // 선택한 옵션 처리 로직 추가
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1); // 다음 문제로 이동
        }
        // 마지막 문제인 경우 다른 처리 로직
    };

    return (
        <Container>
            <QuestionNumber>{`문제 ${currentQuestion + 1}`}</QuestionNumber>
            <QuestionText>{questions[currentQuestion]?.question}</QuestionText>
            <Options>
                {questions[currentQuestion]?.options.map((option, index) => (
                    <OptionButton
                        key={index}
                        onClick={() => handleNextQuestion(index)}
                    >
                        {option}
                    </OptionButton>
                ))}
            </Options>
            <CurrentPosition>{`${currentQuestion + 1} / ${
                questions.length
            }`}</CurrentPosition>
            {/* 다음 페이지로 이동하는 버튼 등 추가 */}
        </Container>
    );
};

export default LiteracyTestScreen;
