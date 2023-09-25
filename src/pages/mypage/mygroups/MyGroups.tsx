import React, { useEffect, useState } from 'react';
import * as MyGroupsStyle from '@/pages/mypage/mygroups/MyGroups.styled';
import { getCookie } from '@/helper/Cookie';
import axios from 'axios';
import MoreButton from '@/components/common/morebutton/MoreButton';
import GroupData from '@/pages/admin/GroupData';
import { useNavigate } from 'react-router-dom';

interface UserData {
  group: number[];
}

interface GroupData {
  name: string;
  introduction: string;
  profile: string;
  tags: string[];
  group_id: number;
}

interface LikedGroupData {
  group_id: number;
}

export default function MyGroupsComponent() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [groupData, setGroupData] = useState<GroupData[]>([]);
  const [likedGroups, setLikedGroups] = useState<LikedGroupData[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = getCookie('loginToken');

    // 사용자 데이터 가져오기
    axios
      .get('/api/v1/auth/me', {
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
        const groupResponse = await axios.get(`/api/v1/group/${groupId}`);

        if (groupResponse.data.error === null) {
          const groupInfo: GroupData = { ...groupResponse.data.data, group_id: groupId };
          groupDataArray.push(groupInfo);
        } else {
          console.error('그룹 슬라이드 가져오기 오류:', groupResponse.data.error);
        }
      } catch (error) {
        console.error('그룹 슬라이드 가져오기 에러:', error);
      }
    }
    setGroupData(groupDataArray);
  };

  const onClickToGroup = (group_id: number) => {
    navigate(`/group/${group_id}/detail`);
  };

  useEffect(() => {
    const loginToken = getCookie('loginToken');

    // 좋아요한 그룹 목록 가져오기
    axios
      .get('/api/v1/auth/user/likes/groups', {
        headers: {
          Authorization: `Bearer ${loginToken}`,
        },
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          const likedGroupsData: LikedGroupData[] = response.data.data;
          setLikedGroups(likedGroupsData);
        }
      })
      .catch(error => {
        console.error('좋아요한 그룹 목록을 가져오는 중 에러 발생:', error);
      });
  }, []);
console.log(likedGroups);
  return (
    <MyGroupsStyle.Container>
      <MyGroupsStyle.Wrapper>
        <MyGroupsStyle.MyGroupBoardBox>
          <MyGroupsStyle.Title>내가 가입한 모임</MyGroupsStyle.Title>
          {groupData.slice(0, 3).map((group, index) => (
            <MyGroupsStyle.GroupBoardBox key={index} onClick={() => onClickToGroup(group.group_id)}>
              <MyGroupsStyle.BoardImg
                src={`/api/v1/image/profile/${group.profile}`}
                alt="그룹의 대표 이미지"
              />
              <MyGroupsStyle.RightSide>
                <MyGroupsStyle.GroupName>{group.name}</MyGroupsStyle.GroupName>
                <MyGroupsStyle.GroupIntro>{group.introduction}</MyGroupsStyle.GroupIntro>
                <MyGroupsStyle.GroupTags>
                  {group.tags.map((tag, tagIndex) => (
                    <MyGroupsStyle.GroupTag key={tagIndex}>{tag}</MyGroupsStyle.GroupTag>
                  ))}
                </MyGroupsStyle.GroupTags>
              </MyGroupsStyle.RightSide>
            </MyGroupsStyle.GroupBoardBox>
          ))}
        </MyGroupsStyle.MyGroupBoardBox>
        <MoreButton to="/group/list">더보기</MoreButton>
      </MyGroupsStyle.Wrapper>

      <MyGroupsStyle.Wrapper>
        <MyGroupsStyle.MyGroupBoardBox>
          <MyGroupsStyle.Title>내가 좋아요한 모임</MyGroupsStyle.Title>
          {likedGroups.slice(0, 3).map((likedGroup, index) => (
            <MyGroupsStyle.GroupBoardBox key={index}>
              {/*여기에 group_id 받아와서 추춣한 그룹 정보를 가져와야함*/}
            </MyGroupsStyle.GroupBoardBox>
          ))}
        </MyGroupsStyle.MyGroupBoardBox>
        <MoreButton to="/group/list">더보기</MoreButton>
      </MyGroupsStyle.Wrapper>
    </MyGroupsStyle.Container>
  );
}
