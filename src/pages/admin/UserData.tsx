import React, { useState } from 'react';
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
  const [deleted, setDeleted] = useState(false);

  async function handleDeleteUser() {
    try {
      await axios.delete(
        `http://localhost:3001/api/v1/admin/users/${data?.user_id}`,
      );
      setDeleted(true);
    } catch (error) {
      throw error;
    }

return (
    <tbody>
        <tr>
            <td>
                <A.Input
                    type="text"
                    value={userData?.name || ''}
                    readOnly={!isEditing} />
            </td>
            <td>
                <A.Input
                    type="text"
                    value={userData?.email || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUserData(prevData => ({ ...prevData!, email: e.target.value }))
                        }
                    readOnly={!isEditing} />
            </td>   
            <td>
                {isEditing ? (
                    <>
                        <A.AdminButton onClick={handleUpdatedUser}>저장</A.AdminButton>
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