import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import LeftScreen from '../leftscreen/LeftScreen';
import { LayoutContainer, Children, Left, Right } from './Layout1.styled';
import BackHeader from '../header/BackHeader';
import CancleCompleteHeader from '../header/CancleCompleteHeader';
import CancleHeader from '../header/CancleHeader';
import NextFooter from '../footer/NextFooter';
import GroupApplyFooter from '../footer/GroupApplyFooter';

interface Layout1Props {
  children: ReactNode;
}

function Layout1({ children }: Layout1Props) {
  return (
    <LayoutContainer>
      <Left>
        <LeftScreen />
      </Left>
      <Right>
        {/* <CancleCompleteHeader /> */}
        {/* <BackHeader /> */}
        <Header />
        {/* <CancleHeader /> */}
        <Children>{children}</Children>
        <Footer />
        {/* <GroupApplyFooter /> */}
        {/* <NextFooter /> */}
      </Right>
    </LayoutContainer>
  );
}

export default Layout1;