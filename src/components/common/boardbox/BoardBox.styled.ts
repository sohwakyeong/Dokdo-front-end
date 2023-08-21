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
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

export const TextBox = styled.div`
  margin-left: 10px;

  & div {
    font-size: 15px;
  }
`;
