import React from 'react';
import * as MyGroupsStyle from './MyGroups.styled';

function MyGroupsComponent() {


  return (
    <MyGroupsStyle.Container>
      <MyGroupsStyle.Wrapper>
        {/* 모임 1개짜리 컴포넌트 */}
        <MyGroupsStyle.MyGroupBoardBox>
          <MyGroupsStyle.Title>내가 가입한 모임</MyGroupsStyle.Title>
          <MyGroupsStyle.GroupBoardBox>
            <MyGroupsStyle.BoardImg src="" alt="게시된 이미지" />
            <MyGroupsStyle.RightSide>
              <MyGroupsStyle.GroupName>그룹의 이름</MyGroupsStyle.GroupName>
              <MyGroupsStyle.GroupIntro>
                그룹의 소개
              </MyGroupsStyle.GroupIntro>
              <MyGroupsStyle.GroupTag>그룹의 tags</MyGroupsStyle.GroupTag>
            </MyGroupsStyle.RightSide>
          </MyGroupsStyle.GroupBoardBox>
        </MyGroupsStyle.MyGroupBoardBox>
   
      </MyGroupsStyle.Wrapper>
    </MyGroupsStyle.Container>
  );
}

export default MyGroupsComponent;
