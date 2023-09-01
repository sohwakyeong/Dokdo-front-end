import React, { ReactNode, useState } from "react";
import Logo2 from '@/assets/img/Logo2.png';
import User from '@/assets/icon/User.png';
import Note from '@/assets/icon/Note.png';
import Group from '@/assets/icon/Group.png';
import Favorite from '@/assets/icon/Favorite.png';
import Plus from '@/assets/icon/Plus.png';
import Bell from '@/assets/icon/Bell.png';
import * as S from '@/pages/admin/SideBar.styled'
interface AdminProps {
   children: ReactNode;
}

function Admin({children}: AdminProps) {

    return (
    <S.Background>
    <S.GreyWrapper>
        <S.SideBar>
            <S.SideNav>
                    <S.Logo><S.LogoImg src={Logo2} alt="로고 이미지" /></S.Logo> 
                <S.SideMenu>
                    <S.AdminLink to="/">
                        <S.IconImg src={Home} alt="홈 이미지" />공모전/책 관리
                    </S.AdminLink>
                </S.SideMenu>
                <S.SideMenu>
                    <S.AdminLink to="/admin/user">
                        <S.IconImg src={Person} alt="사람 이미지" />회원 정보 관리
                    </S.AdminLink>
                </S.SideMenu>
                <S.SideMenu>
                    <S.AdminLink to="/admin/post">
                    <S.IconImg src={Create} alt="게시글 이미지" />게시글 관리
                    </S.AdminLink>
                </S.SideMenu>
                <S.SideMenu>
                    <S.AdminLink to="/admin/album">
                    <S.IconImg src={Edit} alt="사진첩 이미지" />사진첩 관리
                    </S.AdminLink>
                </S.SideMenu>
                <S.SideMenu>                
                    <S.AdminLink to="/admin/group">
                        <S.IconImg src={Supervised} alt="모임 이미지" />모임 관리
                    </S.AdminLink>
                </S.SideMenu>
            </S.SideNav> 
            <S.LogoutImage src={Logout} alt="로그아웃 이미지" />
            </S.SideBar>
        <S.Children>{children}</S.Children>
    </S.GreyWrapper>
    </S.Background>
    );
}

export default Admin;
