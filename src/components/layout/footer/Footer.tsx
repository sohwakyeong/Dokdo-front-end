import React from 'react';
import { StyledFooter, MenuItem, StyledLink } from './Footer.styled'; 
import homeIcon from '../../../assets/image/Home.png';
import groupIcon from '../../../assets/image/Group.png';
import boardIcon from '../../../assets/image/Note.png';
import likeIcon from '../../../assets/image/Favorite.png';
import userIcon from '../../../assets/image/Person.png';

function Footer() {
  return (
    <StyledFooter>
      <MenuItem>
        <StyledLink to="/">
          <img src={homeIcon} alt="홈 아이콘" />
          <div>홈</div>
        </StyledLink>
        <StyledLink to="/mygroups">
          <img src={groupIcon} alt="내 모임 아이콘" />
          <div>내 모임보기</div>
        </StyledLink>
        <StyledLink to="/freeboard/list">
          <img src={boardIcon} alt="자유 게시판 아이콘" />
          <div>자유 게시판</div>
        </StyledLink>
        <StyledLink to="/likes">
          <img src={likeIcon} alt="좋아요 아이콘" />
          <div>좋아요</div>
        </StyledLink>
        <StyledLink to="/login">
          <img src={userIcon} alt="로그인/가입 아이콘" />
          <div>로그인/가입</div>
        </StyledLink>
      </MenuItem>
    </StyledFooter>
  );
}

export default Footer;
