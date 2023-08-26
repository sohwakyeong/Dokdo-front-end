// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../../assets/icon/Search.png';
import notificationIcon from '../../../assets/icon/Bell.png';
import logo from '../../../assets/icon/RightLogo.png';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function GroupHeader() {
  return (
    <StyleHeader>
      <Up>
        <Logo>
          <Link to="/">
            <StyleLogo src={logo} alt="독도 로고" />
          </Link>
        </Logo>
        <Nav>
          <Link to="/search">
            <StlyedImg src={searchIcon} alt="돋보기 아이콘" />
          </Link>
          <Link to="/notifications">
            <StlyedImg src={notificationIcon} alt="알림 아이콘" />
          </Link>
        </Nav>
      </Up>
      <Down>
        <StyledLink to="/group/detail/id:">HOME</StyledLink>
        <StyledLink to="/group/board">게시판</StyledLink>
        <StyledLink to="/group/photo">사진첩</StyledLink>
      </Down>
    </StyleHeader>
  );
}

export default GroupHeader;

export const StyleHeader = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 110px;
  width: 472px;
  position: fixed;
  z-index: 9999;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

export const Logo = styled.h1`
  font-size: 20px;
  display: flex;
  align-items: center;
  height: 40px;
  white-space: normal;
`;

export const StyleLogo = styled.img`
  width: 58px;
  height: 32px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65px;
`;

export const Up = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: white;
  margin: 5px 0;
`;

export const Down = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: white;
  color: black;
  margin-bottom: 10px;
`;

export const StyledLink = styled(NavLink)`
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #333;
  list-style: none;
  color: black;
  border-bottom: 2px solid transparent;
  height: 100%;
  width: 33%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    border-bottom: 5px solid #7c6250;
  }
`;
export const StlyedImg = styled.img`
  width: 27px;
  height: 27px;
`;
