import React from 'react';
import ImageBox from '../../components/common/imagebox/ImageBox';
import * as M from './Main.styled';
import BoardBox from '../../components/common/boardbox/BoardBox';
import Slider from '../../components/common/slider/Slider';
import Slider2 from '../../components/common/slider/Slider2';
import Slider3 from '../../components/common/slider/Slider3';


function Main() {

  return (
    <M.Wrapper>


      <Slider />
      <M.GridContainer>
        <M.ImageRow>
          {Array(4)
            .fill('')
            .map((v, i) => (
              <ImageBox key={i} />
            ))}
        </M.ImageRow>
        <M.ImageRow>
          {Array(4)
            .fill('')
            .map((v, i) => (
              <ImageBox key={i} />
            ))}
        </M.ImageRow>
      </M.GridContainer>
      <M.GroupList>
        {Array(3)
          .fill('')
          .map((v, i) => (
            <BoardBox key={i} />
          ))}
      </M.GroupList>

      <M.GroupTop10>
        <M.GroupTopTitle>독도 인기 토론 TOP 10 🔥</M.GroupTopTitle>
        <div>지금 가장 인기 있는 토론 모임을 확인해보세요!</div>
      </M.GroupTop10>
      <Slider3 />
      <M.BooksTop10>
        <M.BooksTitle>인기 책 Top 10 🔥</M.BooksTitle>
        <div>독서 토론 인기책을 확인해보세요!</div>
      </M.BooksTop10>
      <Slider2 />
    </M.Wrapper>
  );
}

export default Main;
