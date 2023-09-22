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
