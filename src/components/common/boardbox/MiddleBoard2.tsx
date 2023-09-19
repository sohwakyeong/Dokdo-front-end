import React from 'react';
import * as MB from '@/components/common/boardbox/MiddleBoard2.styled';
import { useNavigate } from 'react-router-dom';
import PlusGroupIcon from '@/assets/icon/PlusGroup.png';

export interface MiddleBoardData2 {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  profile: string;
  name: string;
  isRecruit: boolean;
  maxMember: number;
  meeting: number;
  leader: number;
  like: number;
  location: string;
  day: string;
  genre: string;
  age: number;
  tags: object;
  introduction: string;
}

interface MidleBoardBoxProps {
  data?: MiddleBoardData2;
}

function MiddleBoardBox2({ data }: MidleBoardBoxProps) {
  const navigate = useNavigate();

  // 모임 상세 페이지 URL을 생성하는 함수
  const generateGroupDetailURL = (sequence: string): string => {
    return `/group/${sequence}/detail`;
  };

  // 보드박스 클릭 시 모임 상세 페이지로 이동
  const handleClick = () => {
    if (data) {
      const groupDetailURL = generateGroupDetailURL(data.group_id.toString());
      navigate(groupDetailURL);
    }
  };

  // 데이터가 없을 때 기본값 설정
  if (!data) {
    data = {
      _id: '',
      group_id: 0,
      post_id: 0,
      user_id: 0,
      createdAt: '',
      updatedAt: '',
      __v: 0,
      profile: '',
      name: '가입된 모임이 없습니다.',
      isRecruit: false,
      maxMember: 0,
      meeting: 0,
      leader: 0,
      like: 0,
      location: '',
      day: '',
      genre: '',
      age: 0,
      tags: {},
      introduction: '더 많은 모임에 가입해보세요',
    };
  }

  const { name, introduction } = data;
 
  const imageSource = data.profile
    ? `/api/v1/image/profile/${data.profile}`
    : PlusGroupIcon;

  return (
    <MB.Container onClick={handleClick}>
      <MB.Border>
        <MB.TextImgBox>
          <MB.ImgBox>
            <img src={imageSource} alt="" />
          </MB.ImgBox>
          <MB.TextBox>
            <div>
              <MB.GroupName>{name}</MB.GroupName>
            </div>
            <div>
              <MB.GroupIntro>"{introduction}"</MB.GroupIntro>
            </div>
          </MB.TextBox>
        </MB.TextImgBox>
      </MB.Border>
    </MB.Container>
  );
}

export default MiddleBoardBox2;
