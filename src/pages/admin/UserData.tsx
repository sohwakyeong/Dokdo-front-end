import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as A from '@/pages/admin/Admin.styled';

interface AdminUserData {
  name: string;
  email: string;
  user_id: string;
}

interface AdminUserProps {
  data?: AdminUserData;
}
/**
 * 사용자 데이터를 표시하고 관리하는 UserData 컴포넌트.
 * @param {AdminUserProps} props - 사용자 데이터를 포함하는 props.
 * @returns {React.ReactNode} 사용자 데이터 테이블 행을 렌더링.
 */
function UserData({ data }: AdminUserProps) {
  const [updated, setUpdated] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const [userData, setUserData] = useState<{
    id: number;
    name: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    if (data) {
      setUserData({
        id: parseInt(data.user_id),
        name: data.name,
        email: data.email,
      });
    }
  }, [data]);
/**
   * 선택한 사용자를 삭제하는 함수.
   * @async
   * @returns {void}
   */
  async function handleDeleteUser() {
    try {
      await axios.delete(`/api/v1/admin/users/${data?.user_id}`)
      alert("삭제가 완료되었습니다.");
      setDeleted(true);
      window.location.reload();
    } catch (error) {
      throw error;
    }
  }
 /**
   * 사용자 정보를 업데이트하는 함수.
   * @async
   * @returns {void}
   */
  async function handleUpdatedUser() {
    const updatedUserData = {
      id: userData!.id,
      name: userData!.name,
      email: userData!.email,
    };

    try {
      const response = await axios.put(
        `/api/v1/admin/users/${data?.user_id}`,
        updatedUserData,
        {
          params: { withdrawal: true },
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        setUpdated(true);
        alert("수정이 완료되었습니다.");
        setIsEditing(false);
      } else {
        console.error('업데이트 실패:', response.data.error);
      }
    } catch (error) {
      console.error('업데이트 에러:', error);
    }
  }

  if (!data) {
    return null;
  }

  return (
    <tbody>
      <tr>
        <td>
          <A.Input
            type="text"
            value={userData?.name || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserData(prevData => ({ ...prevData!, name: e.target.value }))
            }
            readOnly={!isEditing}
          />
        </td>
        <td>
          <A.Input
            type="text"
            value={userData?.email || ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserData(prevData => ({ ...prevData!, email: e.target.value }))
            }
            readOnly={!isEditing}
          />
        </td>
        <td>
          {isEditing ? (
            <>
              <A.AdminButton onClick={handleUpdatedUser}>저장</A.AdminButton>
              <A.AdminButton onClick = {handleDeleteUser}>삭제</A.AdminButton>
              {deleted && <></>}
              <A.AdminButton onClick={() => setIsEditing(false)}>
                취소
              </A.AdminButton>
            </>
          ) : (
            <>
              <A.AdminButton onClick={() => setIsEditing(true)}>
                수정
              </A.AdminButton>
              {updated && <></>}
            </>
          )}
        </td>
      </tr>
    </tbody>
  );
}

export default UserData;
