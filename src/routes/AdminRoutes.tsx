import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Admin from '../pages/admin/Admin';
import AdminPost from '../pages/admin/AdminPost';
import AdminGroup from '../pages/admin/AdminGroup';
import InquiryList from '../pages/admin/InquiryList';
import InquiryReply from '../pages/admin/InquiryReply';
import AdminUser from '../pages/admin/AdminUser';
import AdminAlbum from '../pages/admin/AdminAlbum';
import AxiosC from '@/helper/AxiosC';

function AdminRoutes() {
  const [isAdmin, setIsAdmin] = useState(false);

  // 로그인 시 관리자 여부를 확인하고 상태 업데이트
  const checkAdminStatus = async () => {
    try {
      const response = await AxiosC.post(
        '/api/v1/auth/login',
        {
          email: '사용자의 이메일', // 사용자의 이메일 값으로 대체
          password: '사용자의 비밀번호', // 사용자의 비밀번호 값으로 대체
        },
        { withCredentials: true },
      );

      const { data } = response.data;
      setIsAdmin(data.isAdmin); // 관리자 여부를 상태로 업데이트
    } catch (error) {
      console.error('로그인 오류:', error);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로그인 및 관리자 여부 확인
    checkAdminStatus();
  }, []);
  return (
    <Routes>
      <Route
        path="/admin/user"
        element={
          <Admin>
            <AdminUser />
          </Admin>
        }
      />
      <Route
        path="/admin/post"
        element={
          <Admin>
            <AdminPost />
          </Admin>
        }
      />
      <Route
        path="/admin/album"
        element={
          <Admin>
            <AdminAlbum />
          </Admin>
        }
      />
      <Route
        path="/admin/group"
        element={
          <Admin>
            <AdminGroup />
          </Admin>
        }
      />
      <Route
        path="/admin/inquirylist"
        element={
          <Admin>
            <InquiryList />
          </Admin>
        }
      />
      <Route path="/admin/inquiryreply" element={<InquiryReply />} />
      <Route
        path="/admin"
        element={
          isAdmin ? (
            <Admin>
              <></>
            </Admin>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}
export default AdminRoutes;
