import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Border = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px #ddd;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  width: 45%;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 230px;
  & div {
    padding: 5px 0;
    font-size: 15px;
  }
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 99px;
  background-color: #fff7ec;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 7px;
  box-sizing: border-box;
`;
