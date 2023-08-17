import React from 'react';
import {
    container as Container,
    menu as Menu,
    menuItem as MenuItem,
    image as Image,
    startButton as StartButton,
    socialIcons as SocialIcons,
    socialIcon as SocialIcon,
} from './LiteracyTestMain.Style';

const LiteracyTestMain: React.FC = () => {
    return (
        <Container>
            <Menu>
                <MenuItem href="#literacy-test">문해력 테스트</MenuItem>
                <MenuItem href="#ox-quiz">OX 퀴즈</MenuItem>
            </Menu>
            <Image src="/" alt="Description" />
            <StartButton>테스트 시작하기</StartButton>
            <SocialIcons>
                <SocialIcon href="https://facebook.com">
                    <img src="facebook-icon.png" alt="Facebook" />
                </SocialIcon>
                <SocialIcon href="https://twitter.com">
                    <img src="twitter-icon.png" alt="Twitter" />
                </SocialIcon>
                {/* 여기에 더 많은 소셜 아이콘 추가 가능 */}
            </SocialIcons>
        </Container>
    );
};

export default LiteracyTestMain;
