import React from 'react';
import questions from '../../assets/data/questions.json';
import {
  Container,
  ResultText,
  SocialIcons,
  SocialIcon,
  SocialIconImage,
} from './LiteracytestResult.Style';
import facebookIcon from '../../assets/img/facebook.png';
import twitterIcon from '../../assets/img/twitter.png';
import kakaoIcon from '../../assets/img/카카오톡아이콘.png';

type LiteracyTestResultProps = {
  userAnswers: number[]; // 사용자가 선택한 답변 인덱스 배열
};

const LiteracyTestResult: React.FC<LiteracyTestResultProps> = ({
  userAnswers,
}) => {
  // 정답 수 계산
  const correctAnswers = userAnswers.reduce((count, answer, index) => {
    return (
      count + (answer === questions.questions[index].correctAnswer ? 1 : 0)
    );
  }, 0);

  const getResultMessage = () => {
    if (correctAnswers <= 3) return '돼지 입니다.';
    if (correctAnswers <= 6) return '꽤나 똑똑합니다.';
    if (correctAnswers <= 9) return 'iq 146 입니다.';
    if (correctAnswers === 10) return '신 입니다';
    return ''; // 다른 경우에 대한 처리 (필요하다면)
  };

  return (
    <Container>
      <ResultText>{`정답 수: ${correctAnswers} / ${questions.questions.length}`}</ResultText>
      <ResultText>{getResultMessage()}</ResultText> {/* 결과 메시지 출력 */}
      <SocialIcons>
        <SocialIcon href="https://facebook.com">
          <SocialIconImage src={facebookIcon} alt="Facebook" />
        </SocialIcon>
        <SocialIcon href="https://twitter.com">
          <SocialIconImage src={twitterIcon} alt="Twitter" />
        </SocialIcon>
        <SocialIcon href="https://www.kakaocorp.com">
          <SocialIconImage src={kakaoIcon} alt="Kakao" />
        </SocialIcon>
      </SocialIcons>
    </Container>
  );
};

export default LiteracyTestResult;
