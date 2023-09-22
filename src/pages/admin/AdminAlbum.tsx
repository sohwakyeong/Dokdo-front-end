import React, { useState, useEffect, useRef } from 'react';
import * as A from '@/pages/admin/Admin.styled';
import axios from 'axios';
import AlbumData from '@/pages/admin/AlbumData';
import MorePost from '@/assets/icon/newIcon/chat1.png';

async function fetchAllAlbum() {
  try {
    const response = await axios.get('/api/v1/admin/albums');
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

function AdminAlbum() {
  const [albumData, setAlbumData] = useState([]);
  const [isLoading, setIsLoding] = useState(false);
  const element = useRef<HTMLDivElement>(null);
  const onMoveBox = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoding(true)
        const data = await fetchAllAlbum();
        setAlbumData(data);
        setIsLoding(false);
      } catch (error) {
        console.error('데이터를 가져오는 중 에러 발생:', error);
        setIsLoding(false)
      }
    }
    fetchData();
  }, []);

  return (
    <A.Wrapper>
      <A.Menu>
        <A.Top>
          <A.Headline> 회원 사진첩 관리</A.Headline>
        </A.Top>
        <A.Total>
          총 <A.Sum>{albumData.length}</A.Sum> 개
        </A.Total>
        <A.Layout>
          {isLoading ? (<A.NoContent>
              <A.NoImage src = {MorePost} alt="게시물없음"/>
              <A.NoText>데이터를 불러오는중 ...</A.NoText>
            </A.NoContent>) :albumData.length === 0 ? (
            <A.NoContent>
              <A.NoImage src = {MorePost} alt="게시물없음"/>
              <A.NoText>아직 작성된 게시물이 없습니다.</A.NoText>
            </A.NoContent>
          ) : (
            <>
              <div ref={element}></div>
              <A.Table>
                <thead>
                  <tr>
                    <th>글 번호</th>
                    <th>토론 모임</th>
                    <th>작성자</th>
                    <th>작성일자</th>
                    <th>관리</th>
                  </tr>
                </thead>
                {albumData.map((email, name) => (
                  <AlbumData key={name} data={email} />
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

export default AdminAlbum;
