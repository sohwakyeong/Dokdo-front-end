import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginComponent from '@/pages/login/Login';
import SignupComponent from '@/pages/signup/Signup';
import SignupSuccessComponent from '@/pages/signupsuccess/Signupsuccess';
import EditProfileComponent from '@/pages/mypage/editprofile/EditProfile';
import MyGroupsComponent from '@/pages/mypage/mygroups/MyGroups';
import MyPageComponent from '@/pages/mypage/mainmypage/MyPage';
import MyPostsComponent from '@/pages/mypage/myposts/MyPosts';
import DeleteAccountComponent from '@/pages/mypage/deleteaccount/DeleteAccount';
import Layout1 from '@/components/layout/layout1/Layout1';
import Layout3 from '@/components/layout/layout1/Layout3';
import Layout8 from '@/components/layout/layout1/Layout8';
import Layout9 from '@/components/layout/layout1/Layout9';
import AxiosC from '@/helper/AxiosC';

const MypageRoutes = () => {
  const [isLogin, setIsLogin] = useState(false);

  const checkUserPermission = async () => {
    try {
      const response = await AxiosC.post('/api/v1/auth/login');
      const userData = response.data;
      setIsLogin(userData.isLogin);
    } catch (error) {
      console.error('권한 확인 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    checkUserPermission();
  }, []);

  return (
    <Routes>
      {/* 로그인 */}
      <Route
        path="/login"
        element={
          <Layout8>
            <LoginComponent />
          </Layout8>
        }
      />
      {/* 회원가입 */}
      <Route
        path="/signup"
        element={
          <Layout3>
            <SignupComponent />
          </Layout3>
        }
      />
      {/* 회원가입 성공 */}
      <Route
        path="/signupsuccess"
        element={
          <Layout8>
            <SignupSuccessComponent />
          </Layout8>
        }
      />
      {/* 마이페이지/회원탈퇴 */}
      <Route
        path="/user/deleteaccount"
        element={
          <Layout8>
            <DeleteAccountComponent />
          </Layout8>
        }
      />
      {/* 마이페이지/내모임 */}
      <Route
        path="/user/mypage/mygroups"
        element={
          <Layout9>
            <MyGroupsComponent />
          </Layout9>
        }
      />
      {/* 마이페이지/나의글목록 */}
      <Route
        path="/user/mypage/myposts"
        element={
          <Layout1>
            <MyPostsComponent />
          </Layout1>
        }
      />
      {/* 마이페이지/나의정보수정 */}
      <Route
        path="/user/mypage/editprofile"
        element={
          <Layout8>
            <EditProfileComponent />
          </Layout8>
        }
      />
      {/* 마이페이지 */}
      <Route
        path="/user/mypage"
        element={
          <Layout3>
            <MyPageComponent />
          </Layout3>
        }
      />
    </Routes>
  );
};
export default MypageRoutes;
