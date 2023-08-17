import React from 'react';
import {
  StyledLeftScreen,
  Wrapper,
  Tag,
  Logo,
  Info,
  Input,
  Button,
} from './LeftScreen.styled';

function LeftScreen() {
  return (
    <StyledLeftScreen>
      <Wrapper>
        <Logo>독도 로고</Logo>
        <Info>문해력 향상을 위한 독서 모임!</Info>
        <div>
          <Input type="text" placeholder="토론 모임을 검색해보세요" />
          <Button>icon</Button>
        </div>

        <Tag>
          <li>책 추천</li>
          <li>토론 모임</li>
          <li>공모전</li>
          <li>이 달의 모임</li>
          <li>문해력테스트</li>
        </Tag>
      </Wrapper>
    </StyledLeftScreen>
  );
}

export default LeftScreen;
