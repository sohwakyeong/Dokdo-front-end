import React, { ReactNode } from 'react';
import styled from 'styled-components';
import LeftScreen from './leftscreen/LeftScreen';
import RightScreen from './rightscreen/RightScreen';

interface LayoutProps {
  children: ReactNode;
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 30% 15%;; 
  height: 100vh;
`;

function Layouts({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <LeftScreen />
      <main>{children}</main>
      <RightScreen />
    </LayoutContainer>
  );
}

export default Layouts;
