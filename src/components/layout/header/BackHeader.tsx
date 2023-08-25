import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function BackHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Display>
        <BackBtn>
          <button onClick={goBack}>←</button>
        </BackBtn>
        <Props>props</Props>
      </Display>
    </Wrapper>
  );
}

export default BackHeader;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 472px;
  position: fixed;
  z-index: 9999;
  border-bottom: 0.5px solid #d7d7d7;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 0 10px;
`;

const BackBtn = styled.div`
  & button {
    border: none;
    background-color: transparent;
    font-size: 25px;
    cursor: pointer;
  }
`;

const Props = styled.div`
  text-align: center;
  width: 95%;
  padding-right: 30px;
`;
