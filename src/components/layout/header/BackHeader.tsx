import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import searchIcon from '../../../assets/icon/Search.png';
import notificationIcon from '../../../assets/icon/Bell.png';

function BackHeader() {
  return (
    <Wrapper>
      <Display>
        <BackBtn>
          <button>←</button>
        </BackBtn>

        <div>props</div>
        <Nav>
          <Link to="/search">
            <StlyedImg src={searchIcon} alt="돋보기 아이콘" />
          </Link>
          <Link to="/notifications">
            <StlyedImg src={notificationIcon} alt="알림 아이콘" />
          </Link>
        </Nav>
      </Display>
    </Wrapper>
  );
}

export default BackHeader;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 474px;
  position: fixed;
  z-index: 9999;
  border-bottom: 0.5px solid #d7d7d7;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 0 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65px;
`;
const BackBtn = styled.div`
  & button {
    border: none;
    background-color: transparent;
    font-size: 25px;
    cursor: pointer;
  }
`;

const StlyedImg = styled.img`
  width: 27px;
  height: 27px;
`;
