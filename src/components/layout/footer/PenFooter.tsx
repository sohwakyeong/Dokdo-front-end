import React from 'react';
import styled from 'styled-components';
import PenIcon from '@/assets/icon/PenIcon.png';
import { Link, useParams } from 'react-router-dom';

function PenFooter() {
  const { groupId } = useParams<{ groupId: string }>(); // 파라미터 이름을 groupId로 변경

  return (
    <Wrapper>
      <Display>
        <Link to={`/group/${groupId}/boardwrite`}>
          <Button>
            <img src={PenIcon} alt="글 작성 버튼" />
          </Button>
        </Link>
      </Display>
    </Wrapper>
  );
}

export default PenFooter;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 140px;
  font-size: 13px;
  background-color: transparent;
  width: 472px;
  z-index: 9998;
`;

const Display = styled.div`
  width: 95%;
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  height: 50px;
  background-color:transparent;
  border:none;

  cursor: pointer;
  & img {
    width: 80x;
    height: 50px;
  }
`;
