import React, { ReactNode } from 'react';
import LeftScreen from '../leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout1.styled';

import CancleCompleteHeader from '../header/CancleCompleteHeader';
import Footer from '../footer/Footer';

interface Layout6Props {
  children: ReactNode;
}
// 뒤로가기 검색 알림 / 기본푸터
function Layout6({ children }: Layout6Props) {
  return (
    <LayoutContainer>
      <Left>
        <LeftScreen />
      </Left>
      <Right>
        <CancleCompleteHeader />
        <Children>{children}</Children>
        <Footer />
      </Right>
    </LayoutContainer>
  );
}

export default Layout6;
