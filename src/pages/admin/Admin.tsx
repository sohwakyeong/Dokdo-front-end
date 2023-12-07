import React, { ReactNode } from 'react';
import Logo2 from '@/assets/img/Logo2.png';
import Create from '@/assets/icon/adminicon/Create.png';
import Create1 from '@/assets/icon/adminicon/Create_1.png';
import Edit from '@/assets/icon/adminicon/Edit_Message.png';
import Edit1 from '@/assets/icon/adminicon/Edit_Message_1.png';
import Supervised from '@/assets/icon/adminicon/Supervised_user_circle.png';
import Supervised1 from '@/assets/icon/adminicon/Supervised_user_circle_1.png';
import Home from '@/assets/icon/adminicon/Home.png';
import Person from '@/assets/icon/adminicon/Writer_male_0.png';
import Person1 from '@/assets/icon/adminicon/Writer_male_1.png';
import Logout from '@/assets/icon/adminicon/logout.png';
import * as S from '@/pages/admin/SideBar.styled';
import AxiosC from '@/helper/AxiosC';
import { removeCookie } from '@/helper/Cookie';
import { useNavigate } from 'react-router-dom';
//컴포넌트의 프롭스를 위한 인터페이스.
interface AdminProps {
  children: ReactNode;
}

function Admin({ children }: AdminProps) {

  const navigate = useNavigate();
//현재 경로를 기반으로 활성 메뉴상태 확인.
  const isUserMenuActive = window.location.pathname === '/admin/user';
  const isPostMenuActive = window.location.pathname === '/admin/post';
  const isAlbumMenuActive = window.location.pathname === '/admin/album';
  const isGroupMenuActive = window.location.pathname === '/admin/group';
//로그아웃함수 Axios를 이용한 API 호출및 쿠키 제거.
  const handleLogout = async () => {
    try {
      await AxiosC.put('/api/v1/auth/logout');
      await removeCookie('loginToken');
      alert('로그아웃에 성공하셨습니다.');
      navigate('/');
    } catch (e) {
      alert('서버 오류: 다시 시도해주세요.');
    }
  };

  return (
    <S.Background>
      <S.GreyWrapper>
        <S.SideBar>
          <S.SideNav>
            <S.Logo>
              <S.LogoImg src={Logo2} alt="로고 이미지" />
            </S.Logo>
            <S.SideMenu>
              <S.AdminLink to="/">
                <S.IconImg src={Home} alt="홈 이미지" />
                메인페이지
              </S.AdminLink>
            </S.SideMenu>
            <S.SideMenu>
            <S.AdminLink to="/admin/user">
                <S.IconImg
                  src={isUserMenuActive ? Person1 : Person}
                  alt="사람 이미지"
                />
                회원 정보 관리
              </S.AdminLink>
            </S.SideMenu>
            <S.SideMenu>
              <S.AdminLink to="/admin/post">
                <S.IconImg src={isPostMenuActive ? Create1 : Create} alt="게시글 이미지" />
                게시글 관리
              </S.AdminLink>
            </S.SideMenu>
            <S.SideMenu>
              <S.AdminLink to="/admin/album">
                <S.IconImg src={isAlbumMenuActive ? Edit1 : Edit} alt="사진첩 이미지" />
                사진첩 관리
              </S.AdminLink>
            </S.SideMenu>
            <S.SideMenu>
              <S.AdminLink to="/admin/group">
                <S.IconImg src={isGroupMenuActive ? Supervised1 : Supervised} alt="모임 이미지" />
                모임 관리
              </S.AdminLink>
            </S.SideMenu>
          </S.SideNav>
          <S.LogoutBtn onClick={handleLogout}>
            <S.LogoutImage src={Logout} alt="로그아웃 이미지" />
          </S.LogoutBtn>
        </S.SideBar>
        <S.Children>{children}</S.Children>
      </S.GreyWrapper>
    </S.Background>
  );
}

export default Admin;

