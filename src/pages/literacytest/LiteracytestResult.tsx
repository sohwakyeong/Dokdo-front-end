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

  return (
    <Container>
      <ResultText>{`정답 수: ${correctAnswers} / ${questions.questions.length}`}</ResultText>
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
