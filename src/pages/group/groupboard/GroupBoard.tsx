import React, { useState, useEffect } from 'react';
import * as GB from './GorupBoard.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import axios from 'axios';
import PenFooter from '../../../components/layout/footer/PenFooter';
import GroupHeader from '../../../components/layout/header/GroupHeader';
import { useParams } from 'react-router-dom';
import { getCookie } from '../../../helper/Cookie';

interface GroupData {
  _id: string;
  title: string;
  content: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  post_id: number;
  group_id: number;
  user: {
    name: string;
    profilePic: string;
  };
  post: {
    _id: string;
    title: string;
    content: string;
    images: string[];
    createdAt: string;
  };
}

interface GroupBoardProps {
  data?: GroupData;
}

const GroupBoard: React.FC<GroupBoardProps> = ({ data }) => {
  const { groupId } = useParams<{ groupId: string }>();
  const [groupBoardData, setGroupBoardData] = useState<GroupData[]>([]);
  const loginToken = getCookie('loginToken');

  const formatDate = (dateString: string | number | Date) => {
    const options = { month: '2-digit', day: '2-digit' };
    //@ts-ignore
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  async function fetchAllGroupBoardData(groupId: number) {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/group/${groupId}/posts`,
      );
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const groupDataResponse = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${loginToken}`,
            },
            withCredentials: true,
          },
        );
        if (groupDataResponse.status === 200) {
          const fetchedGroupData = groupDataResponse.data.data;
          setGroupBoardData(
            await fetchAllGroupBoardData(fetchedGroupData.group_id),
          );
        } else {
          console.error('그룹 정보 가져오기 에러:', groupDataResponse.status);
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }

    fetchData();
  }, [loginToken, groupId]);

  return (
    <GB.Wrapper>
      <GroupHeader data={{ group: Number(groupId) }} />
      <PenFooter />
      <SearchInput />
      <GB.GroupBoardList>
        <GB.GroupBoardTitle>
          <div>모임 이름</div>
        </GB.GroupBoardTitle>
        {groupBoardData.map((groupBoardItem, index) => (
          <GB.Boardbox key={index}>
            <GB.BoardLeft>
              <GB.User>
                <img src={groupBoardItem.user.profilePic} alt="게시자 프로필" />
                <GB.UserName>
                  <div>{groupBoardItem.user.name}</div>
                  <div>{formatDate(groupBoardItem.post.createdAt)}</div>
                </GB.UserName>
              </GB.User>
              <div>
                <GB.BoardTitle>{groupBoardItem.post.title}</GB.BoardTitle>
                <GB.BoardContent>{groupBoardItem.post.content}</GB.BoardContent>
              </div>
            </GB.BoardLeft>
            <GB.BoardImg>
              {groupBoardItem.images && groupBoardItem.images.length > 0 && (
                <img
                  src={`http://localhost:3001/${groupBoardItem.images[0]}`}
                  alt="게시된 이미지"
                />
              )}
            </GB.BoardImg>
          </GB.Boardbox>
        ))}
      </GB.GroupBoardList>
    </GB.Wrapper>
  );
};

export default GroupBoard;
