import styled from 'styled-components';

export const container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 474px;
  background-color: #59c4fc;
`;

export const menu = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  width: 100%;
  background-color: #f3f3f3;
`;

export const menuItem = styled.a`
  text-decoration: none;
  color: #333;
  cursor: pointer;
  font-weight: bold;
`;

export const image = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
`;

export const startButton = styled.button`
  padding: 15px 30px; // 버튼 패딩 늘림
  font-size: 18px; // 폰트 크기 조정
  cursor: pointer;
  background-color: #007bff; // 버튼 배경색
  color: #fff; // 글자색을 하얀색으로
  border: none; // 테두리 제거
  border-radius: 25px; // 둥근 모서리 효과
  transition: 0.3s; // 호버 효과 부드럽게
  text-transform: uppercase; // 글자를 대문자로
  font-weight: bold; // 글자를 굵게
  letter-spacing: 1px; // 글자 간격 조정
  outline: none; // 클릭 시 외곽선 제거

  &:hover {
    background-color: #0056b3; // 호버 시 색상 변경
    transform: scale(1.05); // 호버 시 버튼 확대
  }

  &:active {
    transform: scale(1); // 클릭 시 원래 크기로 복귀
  }
`;

export const socialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  margin-top: 25px;
`;

export const socialIcon = styled.a`
  margin: 0 10px;
`;
export const socialIconImage = styled.img`
  width: 24px; // 원하는 너비
  height: 24px; // 원하는 높이
  border-radius: 50%; // 둥글게 만들기
`;
export const participantsContainer = styled.div`
  font-size: 16px;
  color: #333;
  margin: 10px;
  margin-bottom: 30px;
`;
