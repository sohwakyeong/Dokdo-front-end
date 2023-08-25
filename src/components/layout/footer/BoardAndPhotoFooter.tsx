import React from 'react';
import styled from 'styled-components';

function BoardAndPhotoFooter() {
  return (
    <Wrapper>
      <Display>
        <Input>
          <input type="text" placeholder="댓글을 입력하세요." />
        </Input>
        <Button>
          <button>등록</button>
        </Button>
      </Display>
    </Wrapper>
  );
}

export default BoardAndPhotoFooter;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  font-size: 13px;
  background-color: white;
  width: 472px;
  z-index: 9999;
  border-top: 0.5px solid #d7d7d7;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  background-color: #84614b;
  height: 50px;
  border-radius: 20px;

  & button {
    border: none;
    color: white;
    background-color: transparent;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const Input = styled.div`
  width: 74%;

  & input {
    width: 100%;
    height: 45px;
    border-radius: 20px;
    border: 1px solid #ddd;

    &::placeholder {
      padding-left: 10px;
      font-size: 15px;
      color: #a8a8a8;
    }
  }
`;
