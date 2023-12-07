import React, { useState, useEffect, useRef } from 'react';
import * as A from '@/pages/admin/Admin.styled';
import axios from 'axios';
import UserData from '@/pages/admin/UserData';
import MorePost from '@/assets/icon/newIcon/chat1.png';

/**
 * 서버에서 모든 사용자 데이터를 가져오는 함수.
 * @returns {Promise<Object[]>} 사용자 데이터 배열을 반환.
*/
async function fetchAllUser() {
  try {
    const response = await axios.get('/api/v1/admin/users');
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
 /**
     * fetchData - 사용자 데이터를 불러와 상태를 업데이트.
     * @async
     * @returns {void}
     */
function AdminUser() {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoding] = useState(false);

  const element = useRef<HTMLDivElement>(null);
  const onMoveBox = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoding(true)
        const data = await fetchAllUser();
        setUserData(data);
        setIsLoding(false);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
        setIsLoding(false);
      }
    }
    fetchData();
  }, []);

  return (
    <A.Wrapper>
      <A.Menu>
        <A.Top>
          <A.Headline>회원 정보 관리</A.Headline>
        </A.Top>
        <A.Total>
          총 <A.Sum>{userData.length}</A.Sum> 명
        </A.Total>
        <A.Layout>
          {isLoading ? (<A.NoContent>
              <A.NoImage src = {MorePost} alt="게시물없음"/>
              <A.NoText>데이터를 불러오는중 ...</A.NoText>
            </A.NoContent>) :userData.length === 0 ? (
            <A.NoContent>
              <A.NoImage src = {MorePost} alt="게시물없음"/>
              <A.NoText>아직 가입한 회원이 없습니다.</A.NoText>
            </A.NoContent>
          ) : (
            <>
              <div ref={element}></div>
            <A.Table>
            <thead>
              <tr>
                <th>닉네임</th>
                <th>이메일</th>
                <th>관리</th>
              </tr>
            </thead>
            {userData.map((email, name) => (
              <UserData key={name} data={email} />
            ))}
          </A.Table>
            </>
          )}
        </A.Layout>
      </A.Menu>
      <A.TopButton>
        <A.ScrollToTop onClick={onMoveBox}>Top</A.ScrollToTop>
      </A.TopButton>
    </A.Wrapper>
  );
}

export default AdminUser;
