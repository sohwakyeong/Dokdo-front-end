import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as GBW from '@/pages/group/groupboardwrite/GroupBoardWrite.styled';
import BoardWriteSection from '@/components/common/boardwritesection/BoardWriteSection';

import { useParams, useNavigate } from 'react-router-dom';
import GroupHeader from '@/components/layout/header/GroupHeader';
import { getCookie } from '@/helper/Cookie';

const GroupBoardWrite: React.FC = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<File[]>([]); // 이미지 파일 배열
  const [userData, setUserData] = useState<any>(null); // User data
  const [postId, setPostId] = useState<number | null>(null); // 게시물 ID

  const { groupId } = useParams<{ groupId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = getCookie('loginToken'); // Assuming getCookie is defined somewhere

    // 게시물 ID가 주어진 경우 수정 모드로 게시물 데이터를 가져옴
    if (postId) {
      axios
        .get(`/api/v1/group/${groupId}/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        })
        .then((response) => {
          if (response.status === 200) {
            const postData = response.data.data.post;
            setTitle(postData.title);
            setContent(postData.content);
          } else {
            console.error('Error fetching post data:', response.status);
          }
        })
        .catch((error) => {
          console.error('Error fetching post data:', error);
        });
    } else {
      // 게시물 ID가 주어지지 않은 경우 새로운 게시물 작성 모드
      axios
        .get('/api/v1/auth/me', {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        })
        .then((response) => {
          if (response.status === 200) {
            setUserData(response.data.data.getUser);
          } else {
            window.location.href = '/signup'; // Simulating page navigation
          }
        })
        .catch((error) => {
          console.error('myposts유저 정보 가져오기 에러:', error);
          alert('게시글 작성은 그룹가입 후 이용할 수 있습니다.')
          window.location.href = '/'; // Simulating page navigation
        });
    }
  }, [postId, groupId]);

  const handleCreatePost = async () => {
    try {
      if (!userData) {
        alert('로그인이 필요합니다.');
        return;
      }
      const uploadedImageNames = await uploadImages();

      const payload = {
        title: title,
        content: content,
        images: uploadedImageNames,
      };

      const response = await axios.post(
        `/api/v1/group/${groupId}/posts`,
        payload,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert('성공적으로 작성되었습니다!');
        navigate(`/group/${groupId}/board`);
      } else {
        alert('게시글 작성은 그룹 가입 후 사용할 수 있습니다.')
      }
    } catch (error: any) {
      console.error('Error:', error);
      alert('게시글 작성은 그룹 가입 후 사용할 수 있습니다.')
     window.location.href = `/group/${groupId}/detail`; 
    }
  };

  const uploadImages = async () => {
    const uploadedImageNames: string[] = [];

    for (const imageFile of images) {
      try {
        const formData = new FormData();
        formData.append('img', imageFile, 'img');

        const uploadResponse = await axios.post(
          `/api/v1/group/images`,
          formData,
          { withCredentials: true }
        );

        if (uploadResponse.data.error === null) {
          uploadedImageNames.push(uploadResponse.data.data[0]);
        } else {
          console.error('이미지 업로드 실패:', uploadResponse.data.error);
        }
      } catch (error) {
        console.error('이미지 업로드 에러:', error);
      }
    }

    return uploadedImageNames;
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImages([...images, files[0]]);
    }
  };

  return (
    <GBW.Wrapper>
      <GBW.GroupHeader>
        <GroupHeader data={{ group: Number(groupId) }} />
      </GBW.GroupHeader>
      <BoardWriteSection />

      <GBW.TitleWrite>
        <textarea
          placeholder="제목을 입력해주세요. (40자)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          rows={2}
          maxLength={40}
        />
      </GBW.TitleWrite>

      <GBW.WriteBox>
        <textarea
          placeholder="게시글 내용은 1000자 이내로 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={15}
          maxLength={1000}
        />
      </GBW.WriteBox>
      <GBW.ImgFileTitle>
        <div>{content.length}/1000자</div>
        <div>사진 등록(선택)</div>
        <div>500MB 이하의 jpg, gif 파일만 3개까지 업로드 가능합니다</div>
      </GBW.ImgFileTitle>
      <GBW.ImgUpload>
        <div>
          <GBW.CameraBox>
            {images.map((image, index) => (
              <GBW.UploadImage
                key={index}
                src={URL.createObjectURL(image)}
                alt="업로드된 이미지"
              />
            ))}
          </GBW.CameraBox>
          <GBW.ImgChoice>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </GBW.ImgChoice>
        </div>
      </GBW.ImgUpload>
      <GBW.PostButton onClick={handleCreatePost}>포스트 작성</GBW.PostButton>
      <p>{responseMessage}</p>
    </GBW.Wrapper>
  );
};

export default GroupBoardWrite;