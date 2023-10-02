import React, { ReactNode } from 'react';
import { LayoutContainer, Children, Left, Right } from '@/components/layout/layout1/Layout1.styled'

import BackHeader from '@/components/layout/header/BackHeader';
import Footer from '@/components/layout/footer/Footer';

import back from '@/assets/img/back1.png';

interface Layout8Props {
  children: ReactNode;
}

// 취소버튼, 중앙프롭스 하단 푸터 X
function Layout8({ children }: Layout8Props) {
  return (
    <LayoutContainer>
      <Left>
      <img src={back} alt="" />
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
