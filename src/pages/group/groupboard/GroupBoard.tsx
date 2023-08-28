import React, { useState, useEffect } from 'react';
import * as GB from './GorupBoard.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import axios from 'axios';
import PenFooter from '../../../components/layout/footer/PenFooter';
import { getCookie } from '../../../helper/Cookie';
import GroupHeader from '../../../components/layout/header/GroupHeader';

interface GroupData {
  _id: string;
  group_id: number;
  // ... 나머지 GroupData의 속성들
}

interface GroupBoardProps {
  data?: GroupData;
}

interface GroupBoardItem {
  _id: string;
  name: string;
  createdAt: string;
  content: string;
  image: string;
  // ... 나머지 GroupBoardItem의 속성들
}

function GroupBoard({ data }: GroupBoardProps) {
  const [groupBoardData, setGroupBoardData] = useState<GroupBoardItem[]>([]);


  useEffect(() => {
    async function fetchData(sequence: string) {
      try {
        const loginToken = getCookie('loginToken');
        const headers = loginToken ? { Authorization: `Bearer ${loginToken}` } : {};

        const response = await axios.get(
          `http://localhost:3001/api/v1/group/${sequence}/posts`,
          { headers }
        );

        setGroupBoardData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (data?._id) {
      fetchData(data._id);
    }
  }, [data?._id]);

  return (
    <GB.Wrapper>

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
                <img src="/" alt="게시자 이름" />
                <div>
                  {groupBoardItem.name}
                  <br />
                  {groupBoardItem.createdAt}
                </div>
              </GB.User>
              <GB.BoardContent>{groupBoardItem.content}</GB.BoardContent>
            </GB.BoardLeft>
            <GB.BoardImg>
              <img src={groupBoardItem.image} alt="게시된 이미지" />
            </GB.BoardImg>
          </GB.Boardbox>
        ))}
      </GB.GroupBoardList>
    </GB.Wrapper>
  );
}

export default GroupBoard;