<<<<<<< HEAD
// import React, { useState } from 'react';
import {  } from 'react-router-dom';
// import LogoIcon from '../../assets/icon/samplelogo.jpeg';

import * as L from './Login.styled';

function LoginComponent() {
  //   const [Email, SetEmail] = useState("");
  //   const [Password, SetPassword] = useState("");


  // const onEmailHandler = (e) => {
  //   SetEmail(e.target.value);
  // }
  // const onPasswordHandler = (e) => {
  //   SetPassword(e.target.value);
  // }
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();

  //   console.log('Email', Email);
  //   console.log('Password', Password);

  //   let formData= {
  //     email: Email,
  //     password: Password,
  //   }
  //   onSubmit(formData);

  // }

  return (
    <L.Container>
      {/* <L.LogoImg src={LogoIcon} alt="logo" />
      <L.Wrapper>
        <L.Title>Login</L.Title>
        <L.JoinLink to="/">회원가입하기</L.JoinLink>
      </L.Wrapper>
      <L.Form>
        <L.Input
=======
import React, { } from 'react';
import {  } from 'react-redux';
import { } from 'react-cookie';

import LogoIcon from '../../assets/icon/samplelogo.jpeg';
import * as LoginStyle from './Login.styled';

function LoginComponent() {

  return (
    <LoginStyle.Container>
      <LoginStyle.LogoImg src={LogoIcon} alt="logo" />
      <LoginStyle.Wrapper>
        <LoginStyle.Title>Login</LoginStyle.Title>
        <LoginStyle.JoinLink to="/user/signup">회원가입하기</LoginStyle.JoinLink>
      </LoginStyle.Wrapper>
      <LoginStyle.Form>
        <LoginStyle.Input
>>>>>>> 60fc22ace8907373d0faafcc848fb03db7a56a5d
          type="email"
          id="id"
          placeholder="아이디를 입력해주세요."
     

        />
        <LoginStyle.Input
          type="password"
      
          placeholder="비밀번호를 입력해주세요."
        />
        <LoginStyle.Save htmlFor="check1">
          <LoginStyle.SaveId type="checkbox" id="check1" />
          아이디 저장하기
        </LoginStyle.Save>
        <LoginStyle.Button type="submit">
          로그인
<<<<<<< HEAD
        </L.Button>
        <L.Button>
          <L.Kakao to="">카카오톡으로 시작</L.Kakao>
        </L.Button>
        <L.Button>
          <L.Google to="">구글아이디로 시작</L.Google>
        </L.Button>
      </L.Form> */}
    </L.Container>
=======
        </LoginStyle.Button>
        <LoginStyle.Button>
          <LoginStyle.Kakao to="">카카오톡으로 시작</LoginStyle.Kakao>
        </LoginStyle.Button>
        <LoginStyle.Button>
          <LoginStyle.Google to="">구글아이디로 시작</LoginStyle.Google>
        </LoginStyle.Button>
      </LoginStyle.Form>
    </LoginStyle.Container>
>>>>>>> 60fc22ace8907373d0faafcc848fb03db7a56a5d
  );
}

export default LoginComponent;
