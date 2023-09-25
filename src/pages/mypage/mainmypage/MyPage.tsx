import React, { SyntheticEvent, useEffect, useState } from 'react';
import * as MyPageStyle from '@/pages/mypage/mainmypage/MyPage.styled';
import { getCookie, removeCookie } from '@/helper/Cookie';
import { useNavigate } from 'react-router-dom';
import AxiosC from '@/helper/AxiosC';
import axios from 'axios';
import Slider5 from '@/components/common/slider/Slider5';
import UserImg from '@/assets/img/userbasicimg.png';

function MyPageComponent() {
  const navigate = useNavigate();
  const linkToAdminPage = () => {
   navigate('/admin/user');
  };
 
  const [userData, setUserData] = useState<{
    name: any;
    profilePic: string;
    introduction: string;
    role: string;
  } | null>(null);

  const defaultUserImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = UserImg;
  };

  const loginToken = getCookie('loginToken');
  useEffect(() => {
    axios
      .get('/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          setUserData(response.data.data.getUser);
        } else {
          navigate('/signup');
        }
      })
      .catch(error => {
        console.error('유저 정보 가져오기 에러:', error);
        navigate('/login');
      });
  }, [navigate, loginToken]);
  

  if (!userData) {
    return <div>로딩 중...</div>;
  }

  // 이 함수에서 AxiosC를 axios로 바꾸면 로그아웃이 안된다
  const handleLogout = async () => {
    try {
      const response = await AxiosC.put('/api/v1/auth/logout');

      await removeCookie('loginToken'); 

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
        <MyPageStyle.UserIcon
          src={`/api/v1/image/profile/${userData.profilePic}`}
          alt=""
          onError={defaultUserImg}
        />
        <MyPageStyle.Introduce>
          <MyPageStyle.NickName>{userData.name}</MyPageStyle.NickName>
          <MyPageStyle.SimpleIntro>
            {userData.introduction ? userData.introduction : '안녕하세요.'}
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
      <MyPageStyle.Section />
      <MyPageStyle.ManageList>
        <MyPageStyle.ManageTitle>나의 관리 목록</MyPageStyle.ManageTitle>
        <MyPageStyle.ManageLink2 to="/user/mypage/myposts">
          <p>나의 글 목록</p>
        </MyPageStyle.ManageLink2>
        <MyPageStyle.ManageLink2 to="/user/mypage/editprofile">
          <p>나의 정보 수정</p>
        </MyPageStyle.ManageLink2>
      </MyPageStyle.ManageList>
{userData.role === "admin" ? (
      <MyPageStyle.ManageList2>
        <MyPageStyle.ManageTitle>관리자 전용</MyPageStyle.ManageTitle>
        <MyPageStyle.ManageButton onClick={linkToAdminPage}>
          <p>관리자 페이지</p>
        </MyPageStyle.ManageButton>
      </MyPageStyle.ManageList2>) : <MyPageStyle.ManageList2>
        <MyPageStyle.ManageTitle>고객센터</MyPageStyle.ManageTitle>
        <MyPageStyle.ManageLink2 to="/user/mypage/inquiry">
          <p>문의하기</p>
        </MyPageStyle.ManageLink2>
      </MyPageStyle.ManageList2>
}
      <MyPageStyle.Logout onClick={handleLogout}>로그아웃</MyPageStyle.Logout>
    </MyPageStyle.Container>
  );
}

export default MyPageComponent;
