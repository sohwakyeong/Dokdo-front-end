import React from 'react';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import * as GR from './Group.styled';
import Slider from '../../../components/common/slider/Slider';

const Group = () => {
  return (
    <GR.Wrapper>
      <Slider />
      <SearchInput />
      <div>
        <GR.GroupImage>
          <img src="" alt="" />
        </GR.GroupImage>
        <GR.HashTag>
          <li>문해력 향상</li>
          <li>독서 모임</li>
          <li>친목</li>
          <li>취미</li>
          <li>자기계발</li>
          <li>예술</li>
        </GR.HashTag>
      </div>
      <GR.Section>
        <GR.DateText>
          <div>
            모집기간 <span>D-9</span>
          </div>
          <div>8월24일(월) ~ 8월 31일(목)</div>
        </GR.DateText>

        <GR.NoticeImage>
          <img src="" alt="" />
        </GR.NoticeImage>
        <GR.SectionLink>
          <div>웹사이트 바로가기</div>
          <div>공유하기</div>
        </GR.SectionLink>
      </GR.Section>
      <Slider />
    </GR.Wrapper>
  );
};

export default Group;
