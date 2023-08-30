import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const User = styled.div`
  display: grid;
  grid-template-columns: 75px auto;
  margin: 20px 10px;
`;

export const EditButton = styled.div`
  font-size: 10px;
  cursor: pointer;
`;

export const DescDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7ec;
  overflow: hidden;
  margin: auto;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const UserWriteBox = styled.div`
  box-sizing: border-box;
  border-top: solid 1px #ddd;
  border-bottom: solid 1px #ddd;
  padding: 20px;
  height: 100%;
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px;

  & button {
    width: 150px;
    height: 40px;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
  }
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-top: solid 1px #ddd;
  margin-bottom: 55px;
`;

export const CommentProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7ec;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
`;

export const UserReply = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  overflow: hidden;
  word-wrap: break-word;
`;

export const UserCommentBox = styled.div`
  display: grid;
  grid-template-columns: 75px auto;
  margin: 20px 10px;
  justify-items: end;
  padding: 5px;

  & div {
    padding: 2px;
  }
`;

export const GroupBoardTitle = styled.div`
  height: 40px;
  width: 100%;
  background-color: #84614b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const CommentTitle = styled.div`
  font-size: 20px;
  padding: 30px 30px 20px 30px;
`;

export const CIWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  font-size: 13px;
  background-color: white;
  width: 472px;
  z-index: 9998;
  border-top: 0.5px solid #d7d7d7;
  margin-bottom: 58px;
`;

export const CIDisplay = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CIButton = styled.div`
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

export const CIInput = styled.div`
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
