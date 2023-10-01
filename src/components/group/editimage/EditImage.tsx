import React, { useState, useEffect } from 'react';
import * as IUL from './EditImage.styled';
import axios from 'axios';
import { getCookie } from '@/helper/Cookie';
import { useParams } from 'react-router-dom';

interface GroupData {
  post: GroupPost;
}

interface GroupPost {
  post_id: number;
  title: string;
  content: string;
  images: string[]; // 이미지 배열 추가
}

function EditImage() {
  const [editImage, setEditImage] = useState<File | null>(null);
  const [groupData, setGroupData] = useState<GroupData | null>(null);

  // postId를 useParams로 받아옵니다.
  const { groupId, postsId } = useParams<{ groupId: string, postsId: string }>();

  // post_Id를 postsId로 변경
  const post_Id = postsId ? parseInt(postsId, 10) : 0;
  const loginToken = getCookie('loginToken');

  useEffect(() => {
    async function fetchGroupData() {
      try {
        const response = await axios.get(`/api/v1/group/${groupId}/posts/${post_Id}`);
        if (response.status === 200) {
          setGroupData(response.data.data);
        } else {
          console.error('그룹 정보 가져오기 실패:', response.data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    if (post_Id !== 0) {
      fetchGroupData();
    }
  }, [post_Id, groupId]);

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.put(`/api/v1/group/${groupId}/posts/${post_Id}`, formData, {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        console.log('이미지 업로드 성공');

        // 새 이미지 URL을 배열에 추가
        const newImageUrl = response.data.data.images[0]; // 새 이미지 URL
        setGroupData((prevData) => {
          if (prevData) {
            // 이미지 배열을 복제한 후 새 이미지 URL 추가
            const newImages = [...prevData.post.images, newImageUrl];
            
            // GroupData 객체를 복제하고 이미지 배열을 업데이트
            return {
              ...prevData,
              post: {
                ...prevData.post,
                images: newImages,
              },
            };
          }
          return null;
        });
      }
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
    }
  }

  return (
    <div>
      <IUL.CustomFileInput htmlFor="profilePicInput">
        <IUL.StyledFileInput
          id="profilePicInput"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <IUL.CustomFileInputLabel>게시글 이미지 수정</IUL.CustomFileInputLabel>
      </IUL.CustomFileInput>
    </div>
  );
}

export default EditImage;
