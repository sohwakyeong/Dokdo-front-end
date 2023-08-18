import React from 'react';
import {  } from 'react-router-dom';
import LogoIcon from '../../assets/icon/samplelogo.jpeg';

import * as L from './Login.styled';
function LoginComponent() {
    
  return (
    <L.Container>
      <L.LogoImg src={LogoIcon} alt="logo" />
      <L.Wrapper>
        <L.Title>Login</L.Title>
        <L.JoinLink to="/">회원가입 하러가기</L.JoinLink>
      </L.Wrapper>
      <L.Form>
        <L.Input type="text" id="id" placeholder="아이디를 입력해주세요." />
        <L.Input type="password" placeholder="비밀번호를 입력해주세요." />
        <L.Button type="submit">로그인</L.Button>
        <L.Button>
          <L.Kakao to="">카카오톡으로 시작</L.Kakao>
        </L.Button>
        <L.Button>
          <L.Google to="">구글아이디로 시작</L.Google>
        </L.Button>
      </L.Form>
    </L.Container>
  );
}

export default LoginComponent;
