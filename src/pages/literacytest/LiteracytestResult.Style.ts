import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; // 수평 중앙 정렬
  width: 474px;
  height: 100%; // 화면의 높이만큼 설정
  margin-top: 50px;
`;

export const ImgResult = styled.div`
  width: 100%;
  display: flex;
flex-direction: column;
  align-items: center;
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
export const ReviewButton = styled.button`
  width: 284px;
  height: 60px;
  padding: 20px 66px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fdf8ef;
  color: #595959;
  border: 1px solid #e1d7d1;
  border-radius: 50px;

  transition: 0.3s;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  outline: none;
  margin-top: 40px;
  text-decoration: none;

  &:hover {
    background: #84614b;
    color: white;
  }

  &:active {
    background: #d0d0d0;
  }
`;
export const TestInstructions = styled.div`
  margin-top: 30px;
  text-align: center;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const RepeatButton = styled.button`
  width: 284px;
  height: 60px;
  padding: 20px 66px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fdf8ef;
  color: #595959;
  border: 1px solid #e1d7d1;
  border-radius: 50px;

  transition: 0.3s;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  outline: none;
  margin-top: 10px;
  text-decoration: none;
  &:hover {
    background: #84614b;
    color: white;
  }

  &:active {
    background: #d0d0d0;
  }
`;

export const StyledLink = styled(Link)`
  padding: 20px 66px;
  font-size: 20px;
  cursor: pointer;
  background-color: #84614b;
  color: #fff;
  border: none;
  border-radius: 50px;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  outline: none;
  margin-top: 40px;
  text-decoration: none;
  &:hover {
    background-color: #84614b;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;
export const ResultImgDisplay = styled.div`

  width: 80%;

  & img {
    width: 80%;
    margin: 20px 0; // 위아래 여백 추가
  }
`;
