import React, { ReactNode } from 'react';
import LeftScreen from '../leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout1.styled';

import BackHeader from '../header/BackSearchHeader';
import BoardAndPhotoFooter from '../footer/BoardAndPhotoFooter';

interface Layout7Props {
  children: ReactNode;
}

// 헤더 뒤로가기 / 푸터 댓글 작성
function Layout7({ children }: Layout7Props) {
  return (
    <LayoutContainer>
      <Left>
        <LeftScreen />
      </Left>
      <Right>
        <BackHeader />
        <Children>{children}</Children>
        <BoardAndPhotoFooter />
      </Right>
    </LayoutContainer>
  );
}

export default Layout7;