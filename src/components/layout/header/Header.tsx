import React from 'react';
import { StyleHeader, Up, Logo, Nav, Down, StyledLink } from './Header.styled';
import { Link } from 'react-router-dom'; 
import searchIcon from '../../../assets/image/Glass.png';
import notificationIcon from '../../../assets/image/Bell.png';

function Header() {
  return (
    <StyleHeader>
      <Up>
        <Logo>독도 로고</Logo>
        <Nav>
          <Link to="/search">
            <img src={searchIcon} alt="돋보기 아이콘" />
          </Link>
          <Link to="/notifications">
            <img src={notificationIcon} alt="알림 아이콘" />
          </Link>
        </Nav>
      </Up>
      <Down>
        <StyledLink to="/">홈</StyledLink>
        <StyledLink to="/group">토론 모임</StyledLink>
        <StyledLink to="/">OX퀴즈/테스트</StyledLink>
        <StyledLink to="/freeboard/list">자유게시판</StyledLink>
        <StyledLink to="/contest">공모전</StyledLink>
      </Down>
    </StyleHeader>
  );
}

export default Header;
