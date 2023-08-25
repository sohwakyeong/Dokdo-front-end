import React from 'react';
import styled from 'styled-components';

function CancleHeader() {
  return (
    <Wrapper>
      <Display>
        <BackBtn>
          <button>←</button>
        </BackBtn>
        <Props>props</Props>
      </Display>
    </Wrapper>
  );
}

export default CancleHeader;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 474px;
  position: fixed;
  z-index: 9999;
  border-bottom: 0.5px solid #d7d7d7;
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
`;
