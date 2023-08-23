import React, { useState, useEffect } from 'react';
import {
  container as Container,
  menu as Menu,
  menuItem as MenuItem,
  image as Image,
  startButton as StartButton,
  socialIcons as SocialIcons,
  socialIcon as SocialIcon,
  socialIconImage as SocialIconImage,
  participantsContainer as ParticipantsContainer,
  StyledLink,
} from './LiteracyTestMain.Style';
import { useNavigate } from 'react-router-dom';
import literacyTestImage from '../../assets/img/문해력.png';
import facebookIcon from '../../assets/img/facebook.png';
import twitterIcon from '../../assets/img/twitter.png';
import kakaoIcon from '../../assets/img/카카오톡아이콘.png';
import { useLocation } from 'react-router-dom';

const LiteracyTestMain: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [participants, setParticipants] = useState(0);

  useEffect(() => {
    setParticipants(376);
  }, []);

  const handleStartTest = () => {
    navigate('/literacy-test/screen');
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
            style={{ textDecoration: 'none', color: '#FFF' }}
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
      <Image src={literacyTestImage} alt="Description" />
      <ParticipantsContainer>
        {participants}명이 테스트에 참여했습니다.
      </ParticipantsContainer>{' '}
      <StartButton onClick={handleStartTest}>테스트 시작하기</StartButton>
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

export default LiteracyTestMain;
