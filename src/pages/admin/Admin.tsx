import React,{ ReactNode } from "react";
import * as A from './Admin.styled';

interface AdminProps {
   children: ReactNode;
}

function Admin({children}: AdminProps) {
    return (
    <A.Background>
    <A.Wrapper>
        <A.SideBar>
        <A.SideNav>
                <A.Logo>Logo</A.Logo> 
                <div></div>
                <A.AdminLink to="/">홈</A.AdminLink>
                <div></div>
                <A.AdminLink to="/admin/user">회원 정보 관리</A.AdminLink>
                <div></div>
                <A.AdminLink to="/admin/post">게시글 관리</A.AdminLink>
                <div></div>
                <A.AdminLink to="/admin/group">모임 관리</A.AdminLink>
                <div></div>
                <A.AdminLink to="/admin/inquirylist">문의사항</A.AdminLink>
        </A.SideNav> 
        <A.LogoutButton >로그아웃</A.LogoutButton>
        </A.SideBar>
        <A.Children>{children}</A.Children>
    </A.Wrapper>
    </A.Background>
    );
}

export default Admin;
