// BoardBox.tsx
import React from 'react';
import * as BB from './BoardBox.styled';
import BoardImgBox from './BoardImgBox';

interface BoardBoxProps {
  data?: {
    _id: string; // 모임 이름 
    group_id: number; // 그룹 ID 
    post_id: number; // 포스트 ID 
    user_id: number; // 사용자 ID
    createdAt: string; // 생성일
    updatedAt: string; // 업데이트일
    __v: number; // 버전
    profile: string; // 그룹 이미지 프로필 URL
    name: string; //  그룹 이름
    isRecruit: boolean; //  모집 여부
    maxMember: number; // 최대 멤버 수
    meeting: number; //  회의 횟수?
    leader: number; // 모임장 ID
  };
}
// 우측 이미지, div 3개 짜리 박스
function BoardBox({ data }: BoardBoxProps) {
  return (
    <BB.Border>
      {data && (
        <BB.TextBox>
          <div>Name: {data.name}</div> {/* 새로운 필드 표시 */}
          <div>Group ID: {data.group_id}</div>
          <div>Post ID: {data.post_id}</div>
        </BB.TextBox>
      )}
      {data && <BB.ImgBox>
        <BoardImgBox data={{ profile: data.profile }} />
        </BB.ImgBox>}
    </BB.Border>
  );
}

export default BoardBox;
