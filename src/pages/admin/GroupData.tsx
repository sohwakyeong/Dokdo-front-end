import React, { useState } from 'react';
import axios from 'axios';
import * as A from '@/pages/admin/Admin.styled';

interface AdminGroupData {
  group_id: number;
  name: string;
  isRecruit: boolean;
  profile: string;
  introduction: string;
  place: string;
  createdAt: string;
  tags: string;
  search: string;
  location: string;
  day: string;
  genre: string;
  age: string;
}

interface AdminGroupProps {
  data?: AdminGroupData;
}
/**
 * 그룹 데이터를 표시하는 GroupData 컴포넌트.
 * @param {AdminGroupProps} props - 그룹 데이터를 포함하는 props.
 * @returns {React.ReactNode} 그룹 데이터 테이블 행을 렌더링.
 */
function GroupData({ data }: AdminGroupProps) {
  const [deleted, setDeleted] = useState(false);
/**
   * 선택한 그룹을 삭제하는 함수.
   * @async
   * @returns {void}
   */
  async function handleDeleteGroup() {
    try {
      await axios.delete(`/api/v1/admin/groups/${data?.group_id}`);
      alert('삭제가 완료되었습니다.');
      setDeleted(true);
      window.location.reload();
    } catch (error) {
      throw error;
    }
  }

  if (!data) {
    return null;
  }

  const { group_id, name, place, createdAt } = data;
  const utcDate = new Date(createdAt);
  const localDate = utcDate.toLocaleDateString();

  return (
    <tbody>
      <tr>
        {data && <td>{group_id}</td>}
        {data && <td>{name}</td>}
        {data && <td>{place}</td>}
        {data && <td>{localDate}</td>}
        {data && (
          <td>
            <A.AdminButton onClick={handleDeleteGroup}>삭제</A.AdminButton>
            {deleted && <></>}
          </td>
        )}
      </tr>
    </tbody>
  );
}

export default GroupData;
