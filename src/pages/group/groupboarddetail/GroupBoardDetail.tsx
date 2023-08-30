import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as GBD from './GroupBoaderDetail.styled';
import { getCookie } from '../../../helper/Cookie';
import { useParams } from 'react-router-dom';

interface GroupDetailData {
  data: {
    _id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    post_id: number;
    images: string[];
    group_id: number;
  };
}

interface GroupBoardDetailDataProps {
  data?: GroupDetailData;
}

const GroupBoardDetail: React.FC<GroupBoardDetailDataProps> = ({ data }) => {
  const loginToken = getCookie('loginToken');

  const [groupDetail, setGroupDetail] = useState<GroupDetailData | null>(null);
  const { group_id, post_id } = useParams<{
    group_id: string;
    post_id: string;
  }>();

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
          },
        );
        if (groupDataResponse.status === 200) {
          const fetchedGroupData = groupDataResponse.data.data;
          fetchGroupDetail(
            parseInt(fetchedGroupData.group_id),  // Parse the group_id to integer
            parseInt(fetchedGroupData.post_id)    // Parse the post_id to integer
          );
        } else {
          console.error(
            '그룹 정보 가져오기 에러:',
            groupDataResponse.data.status
          );
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }
    console.log('user_id:', group_id); // Add this line
    console.log('post_id:', post_id);   // Add this line
  
    fetchData();
  }, [loginToken, group_id]);

  async function fetchGroupDetail(group_Id: number, post_Id: number) {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/group/${group_Id}/posts/${post_Id}`
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

  if (!groupDetail) {
    return <div>Loading...</div>;
  }

  return (
    <GBD.Wrapper>
      <GBD.GroupBoardTitle>
        <div>{groupDetail.data.title}</div>
      </GBD.GroupBoardTitle>
      <GBD.User>
        <GBD.ProfileImg>
          {/* <img src={groupDetail.user.profilePic} alt="작성자 프로필" /> */}
        </GBD.ProfileImg>
        <GBD.Desc>
          <GBD.DescDisplay>
            <div>
              <div>{groupDetail.data.createdAt}</div>
            </div>
            <GBD.EditButton>●●●</GBD.EditButton>
          </GBD.DescDisplay>
        </GBD.Desc>
      </GBD.User>
      <GBD.UserWriteBox>
        <div>{groupDetail.data.content}</div>
      </GBD.UserWriteBox>
      <GBD.Button>
        <button>❤️ 좋아요 숫자</button>
        <button>공유하기</button>
      </GBD.Button>
      <GBD.Comment>{/* 댓글 표시 부분 */}</GBD.Comment>
      <GBD.CIWrapper>
        <GBD.CIDisplay>
          <GBD.CIInput>
            <input type="text" placeholder="댓글을 입력하세요." />
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
