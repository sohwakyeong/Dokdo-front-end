import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as GBD from './GroupBoaderDetail.styled';
import { getCookie } from '../../../helper/Cookie';
import { useParams } from 'react-router-dom';

interface GroupDetailData {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  post_id: number;
  images: string[];
}

interface GroupBoardDetailDataProps {
  data?: {
    data: GroupDetailData;
  };
}

const GroupBoardDetail: React.FC<GroupBoardDetailDataProps> = ({ data }) => {
  const loginToken = getCookie('loginToken');

  const [groupDetail, setGroupDetail] = useState<GroupDetailData | null>(null);
  const { group_id, post_id } = useParams<{
    group_id: string;
    post_id: string;
  }>();

  async function fetchGroupDetail(groupID: string, postID: string) {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/group/${groupID}/posts/${postID}`
      );

      if (response.status === 200) {
        const fetchedDetailData = response.data.data;
        setGroupDetail(fetchedDetailData);
      } else {
        console.error('Error fetching detail data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching detail data:', error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const groupDataResponse = await axios.get(
          `http://localhost:3001/api/v1/group/${group_id}`,
          {
            headers: {
              Authorization: `Bearer ${loginToken}`,
            },
            withCredentials: true,
          }
        );
        if (groupDataResponse.status === 200) {
          const fetchedGroupData = groupDataResponse.data.data;
          fetchGroupDetail(fetchedGroupData.group_id,fetchedGroupData.post_id);
        } else {
          console.error('그룹 정보 가져오기 에러:', groupDataResponse.status);
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }

    fetchData();
  }, [loginToken, group_id, post_id]);

  if (!groupDetail) {
    return <div>Loading...</div>;
  }


  return (
    <GBD.Wrapper>
      <GBD.GroupBoardTitle>
        <div>{groupDetail.title}</div>
      </GBD.GroupBoardTitle>
      <GBD.User>
        <GBD.ProfileImg>
          {/* <img src={groupDetail.user.profilePic} alt="작성자 프로필" /> */}
        </GBD.ProfileImg>
        <GBD.Desc>
          <GBD.DescDisplay>
            <div>
              <div>{groupDetail.createdAt}</div>
            </div>
            <GBD.EditButton>●●●</GBD.EditButton>
          </GBD.DescDisplay>
        </GBD.Desc>
      </GBD.User>
      <GBD.UserWriteBox>
        <div>{groupDetail.content}</div>
      </GBD.UserWriteBox>
      <GBD.Button>
        <button>❤️ 좋아요 숫자</button>
        <button>공유하기</button>
      </GBD.Button>
      <GBD.Comment>{/* 댓글 표시 부분 */}</GBD.Comment>
      <GBD.CIWrapper>
        <GBD.CIDisplay>
          <GBD.CIInput>
            <input
              type="text"
              placeholder="댓글을 입력하세요."
          
            />
          </GBD.CIInput>
          <GBD.CIButton>
            <button>등록</button>
          </GBD.CIButton>
        </GBD.CIDisplay>
      </GBD.CIWrapper>
    </GBD.Wrapper>
  );
};

export default GroupBoardDetail;
