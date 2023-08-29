import React, { ReactNode } from 'react';
import LeftScreen from '../leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout1.styled';
import BackHeader from '../header/BackHeader';
import Footer from '../footer/Footer';

interface Layout8Props {
  children: ReactNode;
}

// 취소버튼, 중앙프롭스 하단 푸터 X
function Layout8({ children }: Layout8Props) {
  return (
    <LayoutContainer>
      <Left>
        <LeftScreen />
      </Left>
      <Right>
        <BackHeader />
        <Children>{children}</Children>
        <Footer />
      </Right>

    </LayoutContainer>
  );
}

export default Layout8;
