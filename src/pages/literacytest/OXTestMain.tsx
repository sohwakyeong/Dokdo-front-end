import React from 'react';
import {
    container as Container,
    menu as Menu,
    menuItem as MenuItem,
    image as Image,
    startButton as StartButton,
    socialIcons as SocialIcons,
    socialIcon as SocialIcon,
    socialIconImage as SocialIconImage,
} from './OXTestMain.Style';
import OXTestImage from '../../assets/img/ox퀴즈.png';
import facebookIcon from '../../assets/img/facebook.png';
import twitterIcon from '../../assets/img/twitter.png';
import { Link } from 'react-router-dom';

const OXTestMain: React.FC = () => {
    return (
        <Container>
            <Menu>
                <MenuItem>
                    <Link to="/literacy-test">문해력 테스트</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/ox-quiz">OX 퀴즈</Link>
                </MenuItem>
            </Menu>
            <Image src={OXTestImage} alt="Description" />{' '}
            {/* import한 이미지를 사용합니다. */}
            <StartButton>테스트 시작하기</StartButton>
            <SocialIcons>
                <SocialIcon href="https://facebook.com">
                    <SocialIconImage src={facebookIcon} alt="Facebook" />
                </SocialIcon>
                <SocialIcon href="https://twitter.com">
                    <SocialIconImage src={twitterIcon} alt="Twitter" />
                </SocialIcon>
                {/* 여기에 더 많은 소셜 아이콘 추가 가능 */}
            </SocialIcons>
        </Container>
    );
};

export default OXTestMain;
