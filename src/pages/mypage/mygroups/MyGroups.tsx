import React, { useEffect, useState } from 'react';
import * as MyGroupsStyle from './MyGroups.styled';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../../helper/Cookie';
import axios from 'axios';
import MoreButton from '../../../components/common/morebutton/MoreButton';

interface UserData {
  
  group: number[]; // group 필드는 숫자 배열로 정의
}

interface GroupData {
  name: string;
  introduction: string;
  tags: string[];
  // 그룹의 다른 필드를 여기에 추가할 수 있습니다.
}

export default function MyGroupsComponent() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [groupData, setGroupData] = useState<GroupData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = getCookie('loginToken');

    axios
      .get('http://localhost:3001/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          const userData: UserData = response.data.data;
          setUserData(userData);

          if (userData.group && userData.group.length > 0) {
            // 사용자의 그룹 데이터를 가져옵니다.
            fetchMyGroups(userData.group);
          }
        } else {
          console.error('사용자 데이터를 가져오지 못했습니다.');
        }
      })
      .catch(error => {
        console.error('사용자 데이터를 가져오는 중 에러 발생:', error);
      });
  }, []);

  const fetchMyGroups = async (groupIds: number[]) => {
    const groupDataArray: GroupData[] = [];

    for (const groupId of groupIds) {
      try {
        const groupResponse = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}`,
        );

        if (groupResponse.data.error === null) {
          // 그룹 데이터 처리
          const groupInfo: GroupData = groupResponse.data.data;
          groupDataArray.push(groupInfo);
        } else {
          console.error(
            '그룹 슬라이드 가져오기 오류:',
            groupResponse.data.error,
          );
        }
      } catch (error) {
        console.error('그룹 슬라이드 가져오기 에러:', error);
      }
    }

    // 모든 그룹 데이터를 한 번에 설정
    setGroupData(groupDataArray);
  };

  return (
    <MyGroupsStyle.Container>
      <MyGroupsStyle.Wrapper>
        {/* 모임 1개짜리 컴포넌트 */}
        <MyGroupsStyle.MyGroupBoardBox>
          <MyGroupsStyle.Title>내가 가입한 모임</MyGroupsStyle.Title>
          {groupData.map((group, index) => (
            <MyGroupsStyle.GroupBoardBox key={index}>
              <MyGroupsStyle.BoardImg
                src="그룹의 대표 이미지 경로"
                alt="그룹의 대표 이미지"
              />
              <MyGroupsStyle.RightSide>
                <MyGroupsStyle.GroupName>{group.name}</MyGroupsStyle.GroupName>
                <MyGroupsStyle.GroupIntro>
                  {group.introduction}
                </MyGroupsStyle.GroupIntro>
                <MyGroupsStyle.GroupTag>
                  {group.tags.join(', ')}
                </MyGroupsStyle.GroupTag>
              </MyGroupsStyle.RightSide>
            </MyGroupsStyle.GroupBoardBox>
          ))}
        </MyGroupsStyle.MyGroupBoardBox>
        <MoreButton to="/group/list">더보기</MoreButton>
      </MyGroupsStyle.Wrapper>
    </MyGroupsStyle.Container>
  );
}
