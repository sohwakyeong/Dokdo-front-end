import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  FileInputContainer,
  SubmitButton,
  SubmitButtonDisplay,
  StepsContainer,
  StepCircle,
  Title,
} from '@/pages/group/groupcreate/GroupCreatePage4.Styled';

const GroupCreatePage4: React.FC = () => {
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const group_id = (location.state as { group_id?: string })?.group_id || '';

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile && group_id) {
      const formData = new FormData();
      formData.append('img', selectedFile, 'img');

      try {
        setUploading(true);

        const response = await axios.put(
          `/api/v1/group/${group_id}/profilePic`,
          formData,
          { withCredentials: true },
        );

        if (response.status === 200) {
          console.log('Profile picture uploaded successfully.');
        } else {
          console.error('Profile picture upload failed:', response.status);
        }
      } catch (error) {
        console.error('Profile picture upload error:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  const handleComplete = () => {
    navigate('/group/list'); // 완료 버튼을 눌렀을 때 페이지 이동
  };

  return (
    <Container>
      <StepsContainer>
        <StepCircle>1</StepCircle>
        <StepCircle>2</StepCircle>
        <StepCircle>3</StepCircle>
        <StepCircle>4</StepCircle>
      </StepsContainer>
      <Title>우리 모임의 사진을 정해주세요!</Title>
      <FileInputContainer>
        <label>프로필 사진 업로드</label>
      <input type="file" onChange={handleImageUpload} />

      </FileInputContainer>
      <SubmitButtonDisplay>
        <SubmitButton
          type="button"
          disabled={uploading}
          onClick={handleComplete}
        >
          {uploading ? '업로드 중...' : '완료'}
        </SubmitButton>
      </SubmitButtonDisplay>
    </Container>
  );
};

export default GroupCreatePage4;
