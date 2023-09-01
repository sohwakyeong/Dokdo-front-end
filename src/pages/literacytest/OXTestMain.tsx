import React, { useState, useEffect } from 'react';
import {
  container as Container,
  menu as Menu,
  menuItem as MenuItem,
  image as Image,
  startButton as StartButton,
  // socialIcons as SocialIcons,
  // socialIcon as SocialIcon,
  // socialIconImage as SocialIconImage,
  // participantsContainer as ParticipantsContainer,
  StyledLink,
  MenuText,
  TestInstructions,
} from '@/pages/literacytest/OXTestMain.Style';
import { useNavigate } from 'react-router-dom';
import OXTestImage from '@/assets/img/oxquizmain.png';
// import facebookIcon from '@/assets/img/facebook.png';
// import twitterIcon from '@/assets/img/twitter.png';
// import kakaoIcon from '@/assets/img/카카오톡아이콘.png';
import { useLocation } from 'react-router-dom';

const OXTestMain: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate(); // 이것을 추가합니다.
  const [participants, setParticipants] = useState(0);

  useEffect(() => {
    setParticipants(376);
  }, []);

  const handleStartTest = () => {
    // 이 함수를 추가합니다.
    navigate('/ox-quiz/screen'); // 여기에 이동하고자 하는 경로를 적습니다.
  };
  return (
    <Container>
      <Menu>
        <MenuItem
          style={{
            backgroundColor:
              location.pathname === '/literacy-test'
                ? '#84614B'
                : 'transparent',
          }}
        >
          <StyledLink
            to="/literacy-test"
            style={{ textDecoration: 'none', color: '#818181' }}
          >
            문해력 테스트
          </StyledLink>
        </MenuItem>
        <MenuItem
          rightBorder
          style={{
            backgroundColor:
              location.pathname === '/ox-quiz' ? '#84614B' : 'transparent',
          }}
        >
          <StyledLink
            to="/ox-quiz"
            style={{ textDecoration: 'none', color: '#FFF' }}
          >
            OX 퀴즈
          </StyledLink>
        </MenuItem>
      </Menu>

      {/* import한 이미지를 사용합니다. */}
      <TestInstructions></TestInstructions>
      <StartButton onClick={handleStartTest}>테스트 시작하기</StartButton>
      {/* <SocialIcons>
        <SocialIcon href="https://facebook.com">
          <SocialIconImage src={facebookIcon} alt="Facebook" />
        </SocialIcon>
        <SocialIcon href="https://twitter.com">
          <SocialIconImage src={twitterIcon} alt="Twitter" />
        </SocialIcon>
        <SocialIcon href="https://www.kakaocorp.com">
          <SocialIconImage src={kakaoIcon} alt="Facebook" />
        </SocialIcon>
        {/* 여기에 더 많은 소셜 아이콘 추가 가능 */}
      {/* </SocialIcons> */}
    </Container>
  );
};

export default OXTestMain;
