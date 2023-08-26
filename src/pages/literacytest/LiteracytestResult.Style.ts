import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; // 수평 중앙 정렬
  justify-content: center; // 수직 중앙 정렬
  width: 474px;
  height: 100vh; // 화면의 높이만큼 설정
`;

export const ResultText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 20px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SocialIcon = styled.a`
  margin: 0 10px;
  margin-top: 30px;
`;

export const SocialIconImage = styled.img`
  width: 30px;
  height: 30px;
`;
export const ResultImage = styled.img`
  width: 200px; // 너비를 원하는 크기로 조정
  height: auto; // 높이를 자동으로 조정하여 비율 유지
  margin: 20px 0; // 위아래 여백 추가
`;
export const ReviewButton = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  width: 361px;
  height: 51px;
  background-color: #84614b;

  &:hover {
    background: #f0f0f0;
  }

  &:active {
    background: #d0d0d0;
  }
`;
export const TestInstructions = styled.div`
  margin-top: 30px;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const RepeatButton = styled.button`
  margin-top: 40px;
  color: #84614b;
  font-weight: bold;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  width: 361px;
  height: 51px;
  background-color: #fdf8ef;

  &:hover {
    background: #f0f0f0;
  }

  &:active {
    background: #d0d0d0;
  }
`;