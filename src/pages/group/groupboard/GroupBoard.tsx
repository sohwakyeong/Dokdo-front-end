import React, { useState, useEffect } from 'react';
import * as GB from './GorupBoard.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import axios from 'axios';
import PenFooter from '../../../components/layout/footer/PenFooter';
import { getCookie } from '../../../helper/Cookie';
import GroupHeader from '../../../components/layout/header/GroupHeader';
import { useParams } from 'react-router-dom';

interface GroupItem {
  _id: string;
  group_id: number;
  post_id: number;
  user_id: number;
  createdAt: string;
  updateAt: string;
  content: string;
  image: string;
}

function GroupBoard() {


  const [groupData, setGroupData] = useState<GroupItem[]>([]);

  const loginToken = getCookie('loginToken');
  const { groupId } = useParams<{ groupId: string }>();

  useEffect(() => {
    async function fetchGroupData(groupId: number) {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}/posts`,
          {
            headers: {
              Authorization: `Bearer ${loginToken}`,
            },
            withCredentials: true,
          },
        );
        if (response.status === 200) {
          setGroupData(response.data.data);
        } else {
          console.error('그룹 리스트 가져오기 에러:', response.status);
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }

    fetchGroupData(Number(groupId));
  }, [loginToken, groupId]);

  if (!groupData) {
    return <div>로딩 중...</div>;
  }

  return (
    <GB.Wrapper>
  <GroupHeader data={{ group: Number(groupId) }} />
  <PenFooter />
  <GB.InputDisplay>
    <SearchInput />
  </GB.InputDisplay>
  <GB.GroupBoardList>
    <GB.GroupBoardTitle>
      <div>모임명</div>
    </GB.GroupBoardTitle>
    {groupData.length === 0 ? (


      <div>게시글이 없습니다.</div>


      
    ) : (
      groupData.map((groupItem, index) => (
        <GB.Boardbox key={index}>
          <GB.BoardLeft>
            <GB.User>
              <img src="/" alt="게시자 이름" />
              <div>
                {groupItem.user_id}
                <br />
                {groupItem.createdAt}
              </div>
            </GB.User>
            <GB.BoardContent>{groupItem.content}</GB.BoardContent>
          </GB.BoardLeft>
          <GB.BoardImg>
            <img src={groupItem.image} alt="게시된 이미지" />
          </GB.BoardImg>
        </GB.Boardbox>
      ))
    )}
  </GB.GroupBoardList>
</GB.Wrapper>
  );
}

export default GroupBoard;
