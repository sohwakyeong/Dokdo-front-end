import React, { useState } from 'react';
import axios from 'axios';
import { getCookie } from '@/helper/Cookie';
import styled from 'styled-components';

interface GroupNameData {
  group_id: number;
  like: number; // 추가: 그룹의 좋아요 수를 받아오기 위한 prop
}

function GroupLikeButton({ group_id, like }: GroupNameData) {
  const [groupLike, setGroupLike] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [groupLikeNum, setGroupLikeNum] = useState(like); // 초기 좋아요 수를 prop에서 받아옴
  const loginToken = getCookie('loginToken');

  // ...

  // 좋아요 버튼 클릭 시 실행되는 함수
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
        setGroupLike(updatedGroupLike);
        setIsLiked(!isLiked);

        // 좋아요가 업데이트되면 좋아요 수도 업데이트
        const updatedLikeNum = response.data.data.groupLikeCounter;
        setGroupLikeNum(updatedLikeNum);
      } else {
        console.error('groupLike Error', response.status);
      }
    } catch (error) {
      console.error('Error GroupLike Put', error);
    }
  }

  // ...

  return (
    <LikeDisPlay>
      <div>❤️</div>
      <LikeButton
        className="LikeButton"
        onClick={() => handleGroupLikeButton(group_id)}
      >
        {groupLikeNum}
      </LikeButton>
    </LikeDisPlay>
  );
}

export default GroupLikeButton;

const LikeButton = styled.button`
  border: none;
  background-color: white;
  font-size: 11px;
`;

const LikeDisPlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 20px;

  & div {
    font-size: 25px;
  }
`;
