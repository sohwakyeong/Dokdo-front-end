import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  FormGroup,
  FileInputContainer,
  StepsContainer,
  StepCircle,
  Input,
  SubmitButton,
  Form,
  SubmitButtonDisplay,
} from '@/pages/group/groupcreate/GroupCreatePage1.Styled';
import axios from 'axios';

interface GroupCreatePage1Data {
  name: string;
  introduction: string;
  profile: string | null; // 이미지 대신 프로필 이미지 URL을 사용
}

interface GroupCreatePage1Props {
  data: GroupCreatePage1Data;
  updateData: (newData: Partial<GroupCreatePage1Data>) => void;
  handleNext: () => void;
}

const GroupCreatePage1: React.FC<GroupCreatePage1Props> = ({
  data,
  updateData,
  handleNext,
}) => {
  const [profile, setProfile] = useState<File | null>(null); // 프로필 이미지 파일을 관리
  const [name, setName] = useState(data.name);
  const [introduction, setIntroduction] = useState(data.introduction);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // 파일 선택 시 프로필 이미지 파일을 직접 상태로 설정
      const selectedFile = e.target.files[0];
      console.log('Selected profile image:', selectedFile);
      setProfile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let uploadedProfileURL = null;
      if (profile) {
        uploadedProfileURL = await uploadProfilePic();
      }

      updateData({
        name,
        introduction,
        profile: uploadedProfileURL, // 프로필 이미지 URL로 업데이트
      });

      handleNext();

      navigate('/create-group/step2');
    } catch (error: any) {
      console.error('에러:', error);
    }
  };

  const uploadProfilePic = async () => {
    try {
      const formData = new FormData();
      formData.append('img', profile!, 'img');

      const response = await axios.put('/api/v1/group/profilePic', formData, {
        withCredentials: true,
      });

      if (response.status === 200) {
        return response.data; // 업로드에 성공하면 프로필 이미지 URL을 반환
      } else {
        console.error('프로필 이미지 업로드 실패:', response.status);
        throw new Error('프로필 이미지 업로드 실패');
      }
    } catch (error) {
      console.error('프로필 이미지 업로드 에러:', error);
      throw error;
    }
  };

  return (
    <Container>
      <StepsContainer>
        <StepCircle>1</StepCircle>
        <StepCircle>2</StepCircle>
        <StepCircle>3</StepCircle>
      </StepsContainer>
      <Title>
        새로운 독서 토론 모임을 <br /> 시작해볼까요?
      </Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <label>모임명 </label>
          <Input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="모임명을 입력하세요."
          />
        </FormGroup>

        <FormGroup>
          <label>모임소개 </label>
          <textarea
            value={introduction}
            onChange={e => setIntroduction(e.target.value)}
            placeholder="모임소개를 입력하세요."
          />
        </FormGroup>
        <FileInputContainer>
          <label>프로필 사진 업로드 </label>
          <input type="file" onChange={handleImageChange} />
        </FileInputContainer>

        <SubmitButtonDisplay>
          <SubmitButton type="submit">다음</SubmitButton>
        </SubmitButtonDisplay>
      </Form>
    </Container>
  );
};

export default GroupCreatePage1;
