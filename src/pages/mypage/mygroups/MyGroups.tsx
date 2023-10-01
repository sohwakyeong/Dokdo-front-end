import React, { useEffect, useState } from 'react';
import * as MyGroupsStyle from '@/pages/mypage/mygroups/MyGroups.styled';
import { getCookie } from '@/helper/Cookie';
import axios from 'axios';
import MoreButton from '@/components/common/morebutton/MoreButton';
import GroupData from '@/pages/admin/GroupData';
import { useNavigate } from 'react-router-dom';
import MorePost from '@/assets/icon/newIcon/chat1.png';

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

export default function MyGroupsComponent() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [groupData, setGroupData] = useState<GroupData[]>([]);
  const [likedGroups, setLikedGroups] = useState<GroupData[]>([]);
  const [groupInfoData, setGroupInfoData] = useState<GroupData[]>([]);
  const [loading, setLoading] = useState(true);


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

    for (const group_id of groupIds) {
      try {
        const groupResponse = await axios.get(`/api/v1/group/${group_id}`);

        if (groupResponse.data.error === null) {
          const groupInfo: GroupData = {
            ...groupResponse.data.data,
            group_id: group_id,
          };
          groupDataArray.push(groupInfo);
        } else {
          console.error(
            '그룹 정보 가져오기 오류:',
            groupResponse.data.error,
          );
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }
    setGroupData(groupDataArray);
    console.log(groupDataArray);
  };

  const onClickToGroup = (group_id: number) => {
    navigate(`/group/${group_id}/detail`);
  };

  const fetchLikedGroupsAndGroupInfo = async () => {
    const loginToken = getCookie('loginToken');

    try {
      // 좋아요한 그룹 목록 가져오기
      const likedGroupsResponse = await axios.get(
        '/api/v1/auth/user/likes/groups',
        {
          headers: {
            Authorization: `Bearer ${loginToken}`,
          },
          withCredentials: true,
        },
      );

      if (likedGroupsResponse.status === 200) {
        const likedGroupsData: GroupData[] = likedGroupsResponse.data.data;

    
        const groupIds = likedGroupsData.map(likedGroup => likedGroup.group_id);
        console.log(groupIds);
      
        const groupInfoPromises = groupIds.map(async group_id => {
          try {
            const groupInfoResponse = await axios.get(
              `/api/v1/group/${group_id}`,
            );
            if (groupInfoResponse.status === 200) {
              console.log(groupInfoResponse.data.data);
              return groupInfoResponse.data.data;
            }
          } catch (error) {
            console.error('좋아요한 그룹 정보를 가져오는 중 에러 발생:', error);
          }
        });

        const likedGroupInfoData = await Promise.all(groupInfoPromises);
        setLikedGroups(likedGroupsData);
        setGroupInfoData(likedGroupInfoData);
        setLoading(false);
      }
    } catch (error) {
      console.error(
        '좋아요한 그룹 및 그룹 정보를 가져오는 중 에러 발생:',
        error,
      );
    }
  };

  useEffect(() => {
    fetchLikedGroupsAndGroupInfo();
  }, []);

  return (
    <MyGroupsStyle.Container>
      <MyGroupsStyle.Wrapper>
        <MyGroupsStyle.MyGroupBoardBox>
          <MyGroupsStyle.Title>내가 가입한 모임</MyGroupsStyle.Title>
          <MyGroupsStyle.DataCheck>
            {loading ? (
              <MyGroupsStyle.LoadingContainer>
                <MyGroupsStyle.LoadingContent>
                  <MyGroupsStyle.LoadingImg src={MorePost} alt="MorePost" />
                  <MyGroupsStyle.LoadingText>
                    데이터를 불러오는 중...
                  </MyGroupsStyle.LoadingText>
                </MyGroupsStyle.LoadingContent>
              </MyGroupsStyle.LoadingContainer>
            ) : userData && groupData.length > 0 ? (
              <>
                {groupData.slice(0, 3).map((group, index) => (
                  <MyGroupsStyle.GroupBoardBox
                    key={index}
                    onClick={() => onClickToGroup(group.group_id)}
                  >
                    <MyGroupsStyle.BoardImg
                      src={`/api/v1/image/profile/${group.profile}`}
                      alt="그룹의 대표 이미지"
                    />
                    <MyGroupsStyle.RightSide>
                      <MyGroupsStyle.GroupName>
                        {group.name}
                      </MyGroupsStyle.GroupName>
                      <MyGroupsStyle.GroupIntro>
                        {group.introduction}
                      </MyGroupsStyle.GroupIntro>
                      <MyGroupsStyle.GroupTags>
                        {group.tags.map((tag, tagIndex) => (
                          <MyGroupsStyle.GroupTag key={tagIndex}>
                            {tag}
                          </MyGroupsStyle.GroupTag>
                        ))}
                      </MyGroupsStyle.GroupTags>
                    </MyGroupsStyle.RightSide>
                  </MyGroupsStyle.GroupBoardBox>
                ))}
              </>
            ) : (
              <MyGroupsStyle.NoContainer>
                <MyGroupsStyle.NoContent>
                  <MyGroupsStyle.NoContentImg src={MorePost} alt="MorePost" />
                  <MyGroupsStyle.NoContentText>
                    가입한 모임이 없습니다.
                  </MyGroupsStyle.NoContentText>
                </MyGroupsStyle.NoContent>
              </MyGroupsStyle.NoContainer>
            )}
          </MyGroupsStyle.DataCheck>
        </MyGroupsStyle.MyGroupBoardBox>
      
          <MoreButton to="/group/list">모임 둘러보기</MoreButton>
        
      </MyGroupsStyle.Wrapper>

      <MyGroupsStyle.Wrapper>
        <MyGroupsStyle.MyGroupBoardBox>
          <MyGroupsStyle.Title>내가 좋아요한 모임</MyGroupsStyle.Title>
          <MyGroupsStyle.DataCheck>
            {loading ? (
              <MyGroupsStyle.LoadingContainer>
                <MyGroupsStyle.LoadingContent>
                  <MyGroupsStyle.LoadingImg src={MorePost} alt="MorePost" />
                  <MyGroupsStyle.LoadingText>
                    데이터를 불러오는 중...
                  </MyGroupsStyle.LoadingText>
                </MyGroupsStyle.LoadingContent>
              </MyGroupsStyle.LoadingContainer>
            ) : userData && likedGroups.length > 0 ? (
              <>
                {groupInfoData.slice(0, 3).map((groupInfo, index) => (
                  <>
                    <MyGroupsStyle.GroupBoardBox
                      key={index}
                      onClick={() => onClickToGroup(groupInfo.group_id)}
                    >
                      <MyGroupsStyle.BoardImg
                        src={`/api/v1/image/profile/${groupInfo.profile}`}
                        alt="그룹의 대표 이미지"
                      />
                      <MyGroupsStyle.RightSide>
                        <MyGroupsStyle.GroupName>
                          {groupInfo.name}
                        </MyGroupsStyle.GroupName>
                        <MyGroupsStyle.GroupIntro>
                          {groupInfo.introduction}
                        </MyGroupsStyle.GroupIntro>
                        <MyGroupsStyle.GroupTags>
                          {groupInfo.tags.map((tag, tagIndex) => (
                            <MyGroupsStyle.GroupTag key={tagIndex}>
                              {tag}
                            </MyGroupsStyle.GroupTag>
                          ))}
                        </MyGroupsStyle.GroupTags>
                      </MyGroupsStyle.RightSide>
                    </MyGroupsStyle.GroupBoardBox>
                  </>
                ))}
              </>
            ) : (
              <MyGroupsStyle.NoContainer>
                <MyGroupsStyle.NoContent>
                  <MyGroupsStyle.NoContentImg src={MorePost} alt="MorePost" />
                  <MyGroupsStyle.NoContentText>
                    좋아요한 모임이 없습니다.
                  </MyGroupsStyle.NoContentText>
                </MyGroupsStyle.NoContent>
              </MyGroupsStyle.NoContainer>
            )}
          </MyGroupsStyle.DataCheck>
        </MyGroupsStyle.MyGroupBoardBox>
        <MoreButton to="/group/list">모임 둘러보기</MoreButton>
      </MyGroupsStyle.Wrapper>
    </MyGroupsStyle.Container>
  );
}
