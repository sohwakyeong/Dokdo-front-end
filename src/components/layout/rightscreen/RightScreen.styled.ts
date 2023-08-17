import styled from 'styled-components';

export const StyledRightScreen = styled.div`
  background-color: #f0f0f0;
  position: fixed;
  right: 0;
  top: 0;
  width: 15%;
  height: 100vh;
`;

export const Warpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100%;

  & button {
    margin-bottom: 20px;
    border: none;
    background-color: blue;
    color: white;
    height: 30px;
    width: 70px;
    border-radius: 10px;
  }
`;
