import React, { useState, useEffect } from 'react';
import GroupImg from '../../../assets/img/독서모임3.jpg';
import axios from 'axios';
import { getCookie } from '../../../helper/Cookie';
import * as GD from './GroupDetail.styled';
import {
  ModalWrapper,
  ModalHeader,
  ModalContent,
  CloseButton,
} from './GroupDetail.styled';
import { useParams } from 'react-router-dom'; // useParams 임포트
import GroupHeader from '../../../components/layout/header/GroupHeader';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function GroupDetail() {
  const [groupData, setGroupData] = useState<{
    group_id: number;
    name: string;
    tags: string[];
    _id: string;
    location: string;
    day: string;
    genre: string;
    age: string;
    place: string;
    introduction: string;
    search: {
      _id: string;
      location: string;
      day: string;
      genre: string;
      age: string;
    };
  } | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [schedules, setSchedules] = useState<Array<any>>([]);
  const loginToken = getCookie('loginToken');
  const { groupId } = useParams<{ groupId: string }>();
  const getLocalStorageKey = () => `schedules_${groupId}`;

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Method to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Method to add a schedule
  const addSchedule = (newSchedule: any) => {
    if (schedules.length < 5) {
      const newSchedules = [...schedules, newSchedule];
      setSchedules(newSchedules);
      localStorage.setItem(getLocalStorageKey(), JSON.stringify(newSchedules)); // 새로운 일정 추가될 때 로컬 스토리지에도 저장
      closeModal();
    } else {
      console.log('Schedule limit reached!');
    }
  };
  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 해당 groupId의 일정 데이터 불러오기
    const savedSchedules = JSON.parse(
      localStorage.getItem(getLocalStorageKey()) || '[]',
    );
    setSchedules(savedSchedules);
  }, [groupId]); // groupId가 변경될 때만 실행

  useEffect(() => {
    // schedules 상태가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem(getLocalStorageKey(), JSON.stringify(schedules));
  }, [schedules, groupId]);
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
          <div>매주 {groupData.search.day}</div>
        </GD.GroupInfoTP>
        <GD.HashTag>
          <div>
            <GD.HashTag>
              {groupData.tags.map((tag, index) => (
                <div key={index}>{tag}</div>
              ))}
            </GD.HashTag>
          </div>
        </GD.HashTag>
        <GD.GroupInfoBox>{groupData.introduction}</GD.GroupInfoBox>
      </GD.GroupInfo>
      <GD.Schedule>
        <GD.ScheduleTop>
          <GD.ScheduleTitle>일정</GD.ScheduleTitle>
          <button onClick={openModal}>일정 등록</button>
        </GD.ScheduleTop>

        {schedules.length === 0 ? (
          <div>등록된 일정이 없습니다</div>
        ) : (
          schedules.map((schedule, index) => (
            <GD.ScheduleBox key={index}>
              <div>{schedule.title}</div>
              <div>{schedule.date}</div>
              <div>{schedule.location}</div>
              <div>{schedule.amount}</div>
            </GD.ScheduleBox>
          ))
        )}

        {isModalOpen && ( // Modal의 isOpen 대신 조건부 렌더링 사용
          <ModalWrapper>
            <ModalHeader>
              <h2>일정등록</h2>
              <CloseButton onClick={closeModal}>×</CloseButton>
            </ModalHeader>
            <ModalContent>
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();

                  const target = e.target as typeof e.target & {
                    title: { value: string };
                    date: { value: string };
                    location: { value: string };
                    amount: { value: string };
                  };

                  const newSchedule = {
                    title: target.title.value,
                    date: target.date.value,
                    location: target.location.value,
                    amount: target.amount.value,
                  };

                  addSchedule(newSchedule);
                }}
              >
                <div>
                  <label>제목:</label>
                  <input type="text" name="title" required />
                </div>
                <div>
                  <label>일시:</label>
                  <input
                    type="text"
                    placeholder="xx 월, xx 일, 몇시 몇분"
                    name="date"
                    required
                  />
                </div>
                <div>
                  <label>위치:</label>
                  <input type="text" name="location" required />
                </div>
                <div>
                  <label>금액:</label>
                  <input type="text" name="amount" required />
                </div>
                <button type="submit">일정 추가</button>
              </form>
            </ModalContent>
          </ModalWrapper>
        )}
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
