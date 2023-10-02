import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '@/helper/Cookie';
import styled from 'styled-components';

interface GroupNameData {
  group_id: number;
  like: number;
}

function GroupLikeButton({ group_id, like }: GroupNameData) {
  const [isLiked, setIsLiked] = useState(false);
  const [groupLikeNum, setGroupLikeNum] = useState<number>(like);
  const loginToken = getCookie('loginToken');

  const fetchLikeStatus = async (group_Id: number) => {
    try {
      const response = await axios.get(`/api/v1/group/${group_Id}`);

      if (response.status === 200) {
        const groupLikeNum = response.data.data.like;
        const groupLikedStatus = response.data.data.groupLiked; // 가정: API 응답에서 userLiked 항목을 사용하여 사용자가 좋아요를 눌렀는지 확인

        setGroupLikeNum(groupLikeNum);
        setIsLiked(groupLikedStatus);
      } else {
        console.error('Error fetching like status:', response.status);
        console.log('API Response:', response.data);
      }
    } catch (error) {
      console.error('Error fetching like status:', error);
    }
  };

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
        fetchLikeStatus(group_id);
      } else {
        alert('토론 모임 좋아요는 로그인을 해야 누를 수 있습니다');
        console.error('groupLike Error', response.status);
      }
    } catch (error) {
      alert('로그인을 해야 모임 좋아요를 누를 수 있습니다');
      console.error('Error GroupLike Put', error);
    }
  }

  return (
    <LikeDisPlay>
      <LikeButton
        className="LikeButton"
        onClick={() => handleGroupLikeButton(group_id)}
      >
        <HeartIcon>{isLiked ? '❤️' : '❤️'}</HeartIcon>
        <LikeCount>{groupLikeNum}</LikeCount>
      </LikeButton>
    </LikeDisPlay>
  );
}

export default GroupLikeButton;

const LikeButton = styled.button`
  border: none;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeartIcon = styled.span`
  font-size: 20px;
  text-align: center;
`;

const LikeCount = styled.div`
  font-size: 16px;
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
