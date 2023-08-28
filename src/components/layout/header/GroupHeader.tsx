import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface GroupHeaderData {
  group: number;
}

interface GroupHeaderProps {
  data?: GroupHeaderData;
}

function GroupHeader({ data }: GroupHeaderProps) {
  const navigate = useNavigate();

  const generateGroupDetailURL = (sequence: string): string => {
    return `/group/${sequence}/detail`;
  };

  const generateGroupBoardURL = (sequence: string): string => {
    return `/group/${sequence}/board`;
  };

  const generateGroupPhotoURL = (sequence: string): string => {
    return `/group/${sequence}/photo`;
  };

  const handleClick = (link: string) => {
    if (data) {
      const groupDetailURL = generateGroupDetailURL(data.group.toString());
      const groupBoardURL = generateGroupBoardURL(data.group.toString());
      const groupPhotoURL = generateGroupPhotoURL(data.group.toString());

      switch (link) {
        case 'home':
          navigate(groupDetailURL);
          break;
        case 'board':
          navigate(groupBoardURL);
          break;
        case 'photo':
          navigate(groupPhotoURL);
          break;
        default:
          break;
      }
    }
  };

  return (
    <StyleHeader>
      <Down>
        <Button onClick={() => handleClick('home')}>HOME</Button>
        <Button onClick={() => handleClick('board')}>게시판</Button>
        <Button onClick={() => handleClick('photo')}>사진첩</Button>
      </Down>
    </StyleHeader>
  );
}

export default GroupHeader;

const StyleHeader = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  height: 60px;
  width: 471px;
  z-index: 9999;
  position: fixed;
`;

const Down = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: white;
  color: black;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #333;
  list-style: none;
  color: black;
  height: 100%;
  width: 500px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  &.active {
    border-bottom: 5px solid #7c6250;
  }
`;
