import React from 'react';
import {
  Container,
  ResultText,
  SocialIcons,
  SocialIcon,
  SocialIconImage,
} from './OXTestResult.Style';
import questionsData from '../../assets/data/ox-questions.json';
import facebookIcon from '../../assets/img/facebook.png';
import twitterIcon from '../../assets/img/twitter.png';
import kakaoIcon from '../../assets/img/카카오톡아이콘.png';

type OXTestResultProps = {
  userAnswers: string[]; // 사용자의 답
};

const OXTestResult: React.FC<OXTestResultProps> = ({ userAnswers }) => {
  // 정답 수 계산
  const correctAnswers = userAnswers.reduce(
    (count, answer, index) =>
      answer === questionsData.questions[index].answer ? count + 1 : count,
    0,
  );

  return (
    <Container>
      <ResultText>{`정답 수: ${correctAnswers} / ${questionsData.questions.length}`}</ResultText>
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
        {/* 여기에 더 많은 소셜 아이콘 추가 가능 */}
      </SocialIcons>
    </Container>
  );
};

export default OXTestResult;
