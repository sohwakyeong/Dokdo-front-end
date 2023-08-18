import React from 'react';
import { InputWrapper, Input, SearchButton, SearchIcon } from './SearchInput.styled';
import searchIcon from '../../../assets/image/Search.png'; 

// props -> { placeholder }
function SearchInput() {
  return (
    <InputWrapper>
    {/*placeholder={placeholder} 입력해야 함 */}
      <Input type="text" placeholder="검색어를 입력하세요" />
      <SearchButton>
        <SearchIcon src={searchIcon} alt="돋보기 아이콘" />
      </SearchButton>
    </InputWrapper>
  );
}



export default SearchInput;
