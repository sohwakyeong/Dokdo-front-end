import React, { ReactNode } from 'react';
import LeftScreen from '../leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout1.styled'

import BackHeader from '../header/BackSearchHeader';
import NextFooter from '../footer/NextFooter';

interface Layout5Props {
  children: ReactNode;
}
// 헤더 뒤로가기 검색,알림// 푸터 다음or완료 버튼
function Layout5({ children }: Layout5Props) {
  return (
    <LayoutContainer>
      <Left>
        <LeftScreen />
      </Left>
      <Right>
        <BackHeader />
        <Children>{children}</Children>
        <NextFooter />
      </Right>
    </LayoutContainer>
  );
}

export default Layout5;
