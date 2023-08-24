import styled from 'styled-components';

export const Border = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px #ddd;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  height: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: white;
`;

export const TextBox = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  width: 285px;
  height: auto;
  overflow: hidden;
  & div {
    font-size: 15px;
    padding: 3px;
    width: 95%;
    overflow: hidden; 
    text-overflow: ellipsis;
  }
`;

export const ImgBox = styled.div`
  width: 104px;
  height: 104px;
  background-color: #fff7ec;
  object-fit: cover;
  border-radius: 20px;
`;
