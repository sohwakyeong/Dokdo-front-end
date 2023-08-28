import React, { useState, useEffect } from 'react';
import GroupImg from '../../../assets/img/독서모임3.jpg';
import axios from 'axios';
import { getCookie } from '../../../helper/Cookie';
import * as GD from './GroupDetail.styled';
import { useParams } from 'react-router-dom'; // useParams 임포트
import GroupHeader from '../../../components/layout/header/GroupHeader';

function GroupDetail() {
  const [groupData, setGroupData] = useState<{
    group_id: number;
    name: string;
    tags: object;
    _id: string;
    location: string;
    day: string;
    genre: string;
    age: string;
    place: string;
    introduction: string;
  } | null>(null);

  const loginToken = getCookie('loginToken');
  const { groupId } = useParams<{ groupId: string }>(); // useParams 사용하여 groupId 얻기

  useEffect(() => {
    // API 요청 함수 정의
    async function fetchGroupData(groupId: number) {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/v1/group/${groupId}`,
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
          console.error('그룹 정보 가져오기 에러:', response.status);
        }
      } catch (error) {
        console.error('그룹 정보 가져오기 에러:', error);
      }
    }

    // 미리 정의한 API 요청 함수를 호출하여 데이터를 가져옴
    fetchGroupData(Number(groupId)); // groupId를 숫자로 변환하여 함수에 전달
  }, [loginToken, groupId]);

  if (!groupData) {
    return <div>로딩 중...</div>;
  }

  return (
    <GD.Wrapper>
      <GD.GroupHeader>
        <GroupHeader data={{ group: Number(groupId) }} />
      </GD.GroupHeader>
      <GD.GroupImage>
        <GD.EditButton>
          <div>●●●</div>
        </GD.EditButton>
        <img src={GroupImg} alt="모임 설정 이미지" />
      </GD.GroupImage>
      <GD.GroupInfo>
        <GD.GroupName>{groupData.name}</GD.GroupName>
        <GD.GroupInfoTitle>{groupData.introduction}</GD.GroupInfoTitle>
        <GD.GroupInfoTP>
          <div>{groupData.place}</div>
          <div>매주 {groupData.day}</div>
        </GD.GroupInfoTP>
        <GD.HashTag>
          <div></div>
        </GD.HashTag>
        <GD.GroupInfoBox>{groupData.introduction}</GD.GroupInfoBox>
      </GD.GroupInfo>
      <GD.Schedule>
        <GD.ScheduleTop>
          <GD.ScheduleTitle>일정</GD.ScheduleTitle>
          <button>일정 등록</button>
        </GD.ScheduleTop>

        {Array(2)
          .fill('')
          .map((v, i) => (
            <GD.ScheduleBox key={i}>
              <div>D-5</div>
              <div>북적북적 222번째 (독서와 쓰기)</div>
              <div>일시 8/20일 (일) 오후 2:00</div>
              <div>위치 더 숲 2,3,4 세미나 룸</div>
              <div>금액 회비 2000원 + 세미나 룸 1/n</div>
              <div>참여 15/18 (3자리 남음)</div>
            </GD.ScheduleBox>
          ))}
      </GD.Schedule>
      <GD.MemberBox>
        <GD.Member>모집멤버 (25)</GD.Member>
        <ul>
          {Array(5)
            .fill('')
            .map((v, i) => (
              <GD.MemberList key={i}>
                <GD.MemberImg>
                  <img src="" alt="프로필" />
                </GD.MemberImg>
                <GD.Desc>
                  <div>최형욱</div>
                  <div>한줄 소개 블라브라브라브라ㅡ르바르</div>
                </GD.Desc>
              </GD.MemberList>
            ))}
        </ul>
        <GD.ButtonDisplay></GD.ButtonDisplay>
      </GD.MemberBox>
    </GD.Wrapper>
  );
}

export default GroupDetail;
