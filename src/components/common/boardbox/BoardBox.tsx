// BoardBox.tsx
import React from 'react';
import * as BB from './BoardBox.styled';
import BoardImgBox from './BoardImgBox';

interface BoardBoxProps {
  data?: {
    _id: string;
    group_id: number;
    post_id: number;
    user_id: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

function BoardBox({ data }: BoardBoxProps) {
  return (
    <BB.Border>
      {data && (
        <BB.TextBox>
          <div>{data._id}</div>
          <div>Group ID: {data.group_id}</div>
          <div>Post ID: {data.post_id}</div>
        </BB.TextBox>
      )}
      <BoardImgBox />
    </BB.Border>
  );
}



export default BoardBox;
