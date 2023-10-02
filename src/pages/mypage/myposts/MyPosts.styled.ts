import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
  height: 600px;
  margin: 0 auto;
`;

export const GroupBoardList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const BoardWrap = styled.div`
  width: 474px;
  border-bottom: solid 1px #ddd;
  
`;

export const Boardbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 0;
`;

export const BoardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 285px;
  height: auto;
  overflow: hidden;
  margin-top: 3px;

  & div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
  }
`;

export const ProfileData = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-bottom: 5px;
`;
export const UpdatedProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const Writer = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: black;
`;

export const PostedDate = styled.div`
  color: #727272;
  font-size: 13px;
`;
export const Title = styled.div`
  font-weight: 700;
  margin-top: 4px;
  font-size: 15px;
`;

export const Content = styled.div`
  font-size: 14px;
  margin-top: 1px;
  margin-bottom: 10px;
`;

export const ContentLikes = styled.div`
  margin-right: 10px;
`;
export const ContentComment = styled.div`
  font-size: 13px;
  color: gray;
`;

export const BoardImg = styled.img`
  width: 120px;
  height: 120px;
  background-color: #ddd;
  border-radius: 15px;
  overflow: hidden;
  margin-left: 20px;
`;

export const LoadingContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const LoadingContent = styled.div`
  width: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadingImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const LoadingText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: black;
  margin-top: 29px;
`;

export const NoContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const NoContent = styled.div`
  width: 200px;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const NoContentImg = styled.img`
  width: 50px;
  height: 50px;
`;
export const NoContentText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: black;
  margin-top: 29px;
`;
export const GoPostBtn = styled.button`
  width: 223px;
  height: 46px;
  margin-top: 10px;
  background-color: #84614b;
  color: white;
  font-size: 16px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
