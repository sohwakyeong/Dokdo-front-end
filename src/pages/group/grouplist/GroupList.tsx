import React from 'react';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import Slider from '../../../components/common/slider/Slider';
import * as GL from './GroupList.Styled'

const GroupList = () => {
  return (
    <GL.Wrapper>
      <SearchInput />
      <Slider />
    </GL.Wrapper>
  );
};

export default GroupList;