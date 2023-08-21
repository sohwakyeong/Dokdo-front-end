import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 474px;
`;

export const GroupImage = styled.div`
  width: 100%;
  height: 230px;
  margin-top: 10px;
  background-color: #ddd;
`;

export const HashTag = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
`;

export const DateText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & div {
    margin: 5px 0;
  }
`;

export const NoticeImage = styled.div`
  width: 100%;
  height: 240px;
  margin: 10px 0;
  background-color: #ddd;
  border-top: 1px soild #ddd;
  border-bottom: 1px soild #ddd;
`;

export const Section = styled.div`
  margin: 20px 0;
`;
