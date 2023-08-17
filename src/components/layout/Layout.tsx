import React, { ReactNode } from 'react';
import LeftScreen from './leftscreen/LeftScreen';
import RightScreen from './rightscreen/RightScreen';
import Header from './header/Header';
import Footer from './footer/Footer';
import { LayoutContainer } from './Layout.styled'; // 경로를 수정해야 함

interface LayoutProps {
  children: ReactNode;
}

function Layouts({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <LeftScreen />
      <div> 
        <Header />
        {children} 
        <Footer />
      </div>
      <RightScreen />
    </LayoutContainer>
  );
}

export default Layouts;
