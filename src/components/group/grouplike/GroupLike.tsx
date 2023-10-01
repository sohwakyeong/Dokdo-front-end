import React, { useState } from 'react';
import axios from 'axios';
import { getCookie } from '@/helper/Cookie';
import styled from 'styled-components';

interface GroupNameData {
  group_id: number;
  like: number;
}

function GroupLikeButton({ group_id, like }: GroupNameData) {
  const [isLiked, setIsLiked] = useState(like > 0);
  const [groupLikeNum, setGroupLikeNum] = useState(like);
  const loginToken = getCookie('loginToken');

  async function handleGroupLikeButton(group_id: number) {
    try {
      const response = await axios.put(
        `/api/v1/group/${group_id}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );
      if (response.status === 200) {
        const updatedGroupLike = response.data.data.groupLike;

        // 좋아요 상태를 서버의 응답 값으로 업데이트
        setIsLiked(updatedGroupLike);

        const updatedLikeNum = response.data.data.groupLikeCounter;
        setGroupLikeNum(updatedLikeNum);
      } else {
        alert('토론 모임 좋아요는 로그인을 해야 누를 수 있습니다');
        console.error('groupLike Error', response.status);
      }
    } catch (error) {
      console.error('Error GroupLike Put', error);
    }
  }

  return (
    <LikeDisPlay>
      <LikeButton
        className="LikeButton"
        onClick={() => handleGroupLikeButton(group_id)}
      >
        {isLiked ? '❤️' : '🤍'}
      </LikeButton>
      <div>{groupLikeNum}</div>
    </LikeDisPlay>
  );
}

export default GroupLikeButton;

const LikeButton = styled.button`
  border: none;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
`;

const LikeDisPlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  & div {
    font-size: 12px;
  }
`;
