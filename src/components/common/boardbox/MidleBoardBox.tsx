import React from 'react';
import * as MB from './MidleBoardBox.styled';
import BoardImgBox from './BoardImgBox';

interface MidleBoardBoxProps {
  data?: {
    _id: string; // 게시물 ID
    group_id: number; // 그룹 ID
    post_id: number; // 포스트 ID
    user_id: number; // 사용자 ID
    createdAt: string; // 생성일
    updatedAt: string; // 업데이트일
    __v: number; // 버전
    profile: string; // 이미지 프로필 URL
    name: string; // 새로운 필드 추가: 그룹 이름
    isRecruit: boolean; // 새로운 필드 추가: 모집 여부
    maxMember: number; // 새로운 필드 추가: 최대 멤버 수
    meeting: number; // 새로운 필드 추가: 회의 횟수
    leader: number; // 새로운 필드 추가: 리더 ID
  };
}

function MidleBoardBox({ data }: MidleBoardBoxProps) {
  return (
    <MB.Container>
      {data && (
        <MB.Border>
          <MB.TextBox>
            <MB.ImgBox>
              <BoardImgBox data={{ profile: data.profile }} />
            </MB.ImgBox>
            <div>모임명: {data.name}</div>
            <div>모임소개: {data.meeting}</div>
          </MB.TextBox>
        </MB.Border>
      )}
    </MB.Container>
  );
}

export default MidleBoardBox;
