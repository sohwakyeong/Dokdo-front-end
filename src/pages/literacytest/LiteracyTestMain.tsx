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
} from './LiteracyTestMain.Style';
import literacyTestImage from '../../assets/img/문해력.png';
import facebookIcon from '../../assets/img/facebook.png';
import twitterIcon from '../../assets/img/twitter.png';

const LiteracyTestMain: React.FC = () => {
    return (
        <Container>
            <Menu>
                <MenuItem href="#literacy-test">문해력 테스트</MenuItem>
                <MenuItem href="#ox-quiz">OX 퀴즈</MenuItem>
            </Menu>
            <Image src={literacyTestImage} alt="Description" />{' '}
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

export default LiteracyTestMain;
