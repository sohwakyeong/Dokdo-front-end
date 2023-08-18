import React from 'react';
import { Container, ResultText } from './OXTestResult.Style';

const results = ['O', 'X', 'O', 'O', 'X'];

type OXTestResultProps = {
    results: string[]; // 결과 배열
};

const OXTestResult: React.FC<OXTestResultProps> = ({ results }) => {
    // 결과를 계산하는 로직 (예: O의 개수 세기)
    const correctAnswers = results.filter(result => result === 'O').length;

    return (
        <Container>
            <ResultText>{`정답 수: ${correctAnswers} / ${results.length}`}</ResultText>
            {/* 다른 결과 출력 로직 */}
        </Container>
    );
};

export default OXTestResult;
