import React from 'react';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import * as GR from './Group.styled';
import Slider from '../../../components/common/slider/Slider';
import GroupTitleImg from '../../../assets/img/독서토론타이틀이미지예시.jpeg';
import BookSlider from '../../../components/common/slider/BookSlider';
import MoreButton from '../../../components/common/morebutton/MoreButton';
import BoardBox from '../../../components/common/boardbox/BoardBox';

const Group = () => {
  return (
    <GR.Wrapper>
      <SearchInput />
      <div>
        <GR.GroupImage>
          <img src={GroupTitleImg} alt="그룹타이틀이미지" />
        </GR.GroupImage>
      </div>
      <GR.BookContest>
        <GR.HotGroup>
          <GR.HotGroupTitle>떠오르고 있는 독서 토론 모임✨</GR.HotGroupTitle>
          <BoardBox />
          <BoardBox />
          <BoardBox />
          <MoreButton />
        </GR.HotGroup>

        <GR.BookContestTitle>
          주기적인 독서토론 모임으로 공모전도 도전 해 봐🔥
        </GR.BookContestTitle>
        <BookSlider />
      </GR.BookContest>
      <MoreButton />
    </GR.Wrapper>
  );
};

export default Group;
