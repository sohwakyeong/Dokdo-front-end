import React, { useState } from 'react';
import axios from 'axios';
import * as A from '@/pages/admin/Admin.styled';

interface AdminAlbumData {
  album: {
    _id: string;
    group_id: number;
    post_id: number;
    user_id: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  user: {
    name: string;
    profilePic: string;
  };
}

interface AdminAlbumProps {
  data?: AdminAlbumData;
}
/**
 * 앨범 데이터를 표시하는 AlbumData 컴포넌트.
 * @param {AdminAlbumProps} props - 앨범 데이터를 포함하는 props.
 * @returns {React.ReactNode} 앨범 데이터 테이블 행을 렌더링.
 */
function AlbumData({ data }: AdminAlbumProps) {
  const [deleted, setDeleted] = useState(false);
 /**
   * 선택한 앨범을 삭제하는 함수.
   * @async
   * @returns {void}
   */
  async function handleDeleteAlbum() {
    try {
      await axios.delete(`/api/v1/admin/albums/${data?.album.post_id}`);
      alert("삭제가 완료되었습니다.");
      setDeleted(true);
      window.location.reload();
    } catch (error) {
      throw error;
    }
  }

  if (!data) {
    return null;
  }

  const {
    album: { post_id, group_id, createdAt },
    user: { name },
  } = data;
 // UTC 날짜를 로컬 날짜로 변환.
  const utcDate = new Date(createdAt);
  const localDate = utcDate.toLocaleDateString();

  return (
    <tbody>
      <tr>
        {data && <td>{post_id}</td>}
        {data && <td>{group_id}</td>}
        {data && <td>{name}</td>}
        {data && <td>{localDate}</td>}
        {data && (
          <td>
            <A.AdminButton onClick={handleDeleteAlbum}>삭제</A.AdminButton>
            {deleted && <></>}
          </td>
        )}
      </tr>
    </tbody>
  );
}

export default AlbumData;
