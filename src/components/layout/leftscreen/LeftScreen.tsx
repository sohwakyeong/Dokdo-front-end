import React from 'react';
import * as LS from '@/components/layout/leftscreen/LeftScreen.styled'
import searchIcon from '@/assets/icon/LeftSearch.png';
import Logo from '@/assets/icon/LeftLogo.png';
import background from '@/assets/img/background.png'


function LeftScreen() {
  return (
    <LS.StyledLeftScreen>
      <LS.Wrapper>
      <img src={background} alt="" />
      </LS.Wrapper>
    </LS.StyledLeftScreen>
  );
}

export default LeftScreen;
