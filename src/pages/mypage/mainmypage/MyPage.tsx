import React, { useEffect, useState } from 'react';
import * as MyPageStyle from './MyPage.styled';
import UserIcon from '../../../assets/img/userprofile.png';
import { removeCookie } from '../../../helper/Cookie';
import { useNavigate } from 'react-router-dom';
import AxiosC from '../../../helper/AxiosC';
import axios from 'axios';

import Slider5 from '../../../components/common/slider/Slider3'

// 데이터 API. fetchData할 때는 axios를 써야함
async function fetchUserData() {
  try {
    const response = await axios.get(
      'http://localhost:3001/api/v1/auth/user/2?name=true',
    );
    return response.data.data; // 서버 응답에서 실제 그룹 데이터를 반환
  } catch (error) {
    throw error;
  }
}

function MyPageComponent() {
  const navigate = useNavigate();

const [userData, setUserData] = useState([]);

useEffect(() => {
  async function fetchData() {
    try {
      const data = await fetchUserData();
      setUserData(data);
    } catch (error) {
      console.error('데이터를 가져오는 중 에러 발생:', error);
    }
  }

  fetchData();
}, []);
console.log(userData);
  
  // 로그아웃 버튼의 onClick Event
  // 이 함수에서 AxiosC를 axios로 바꾸면 로그아웃이 안된다
  const handleLogout = async () => {
    try {
      const response = await AxiosC.put(
        'http://localhost:3001/api/v1/auth/logout',
      );
      console.log(response);
      // 액세스 토큰 쿠키 삭제
      removeCookie('loginToken');
      alert('로그아웃에 성공하셨습니다.');
      navigate('/');
    } catch (e) {
      console.error('로그아웃 에러:', e);
      alert('서버 오류: 다시 시도해주세요.');
    }
  };

  return (
    <MyPageStyle.Container>
      <MyPageStyle.Wrapper>
        <MyPageStyle.UserIcon src={UserIcon} alt="유저 설정 이미지" />
        <MyPageStyle.Introduce>
          <MyPageStyle.NickName>{userData}</MyPageStyle.NickName>
          <MyPageStyle.SimpleIntro>
            안녕하세요 저는 에세이가 좋아요
          </MyPageStyle.SimpleIntro>
        </MyPageStyle.Introduce>
      </MyPageStyle.Wrapper>

      <MyPageStyle.Group>
        <MyPageStyle.Title>내 모임</MyPageStyle.Title>
        <MyPageStyle.ManageLink to="/user/mypage/mygroups">
          전체보기
        </MyPageStyle.ManageLink>
      </MyPageStyle.Group>

      <Slider5 />

      <MyPageStyle.ManageList>
        <MyPageStyle.ManageTitle>나의 관리 목록</MyPageStyle.ManageTitle>
        <MyPageStyle.ManageLink2 to="/user/mypage/myposts">
          <p>나의 글 목록</p>
        </MyPageStyle.ManageLink2>
        <MyPageStyle.ManageLink2 to="/user/mypage/editprofile">
          <p>나의 정보 수정</p>
        </MyPageStyle.ManageLink2>
      </MyPageStyle.ManageList>
      <MyPageStyle.ManageList2>
        <MyPageStyle.ManageTitle>고객센터</MyPageStyle.ManageTitle>
        <MyPageStyle.ManageLink2 to="/user/mypage/inquiry">
          <p>문의하기</p>
        </MyPageStyle.ManageLink2>
      </MyPageStyle.ManageList2>
      <MyPageStyle.Logout onClick={handleLogout}>로그아웃</MyPageStyle.Logout>
    </MyPageStyle.Container>
  );
}

export default MyPageComponent;
