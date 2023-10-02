import React from 'react';
import * as S from '@/pages/search/Search.styled';
import SearchInput from '@/components/common/searchinput/SearchInput';
import BookAndContestBox from '@/components/common/BookContest/BookAndContestBox';
import Logo from '@/assets/img/Logo1.png';
const Search = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <img src={Logo} alt="" />
      </S.Logo>
      <SearchInput />
      <S.TagBox>
        <S.TagBoxTitle>키워드 추천</S.TagBoxTitle>
        <S.TagList>
          <div>토론모임</div>
          <div>공모전</div>
          <div>책추천</div>

          <div>이 달의 모임</div>
          <div>이 달의 모임</div>
          <div>이 달의 모임</div>
        </S.TagList>
      </S.TagBox>
      <S.BookRecBox>
        <S.BookRecBoxTitle>도서 추천</S.BookRecBoxTitle>
        <S.BookRecList>
          <BookAndContestBox />
        </S.BookRecList>
      </S.BookRecBox>
     
    </S.Wrapper>
  );
};

export default Search;
