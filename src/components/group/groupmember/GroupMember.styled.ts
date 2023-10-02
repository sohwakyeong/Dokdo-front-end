import styled from "styled-components";



export const MemberBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 474px;
  padding: 20px;
  box-sizing: border-box;
  border-top: solid 15px #ddd;
`;

export const MemberList = styled.li`
  display: grid;
  grid-template-columns: 75px auto;
  margin: 15px 0;
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 40px;
  font-weight: bold;
  color: #84614b
`;

export const MemberImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  overflow: hidden;
  margin: auto;

  & img {
    width: 100%;
    height: 100%;
  }
`;
export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-weight: bold;

  & p {
    font-weight: 400;
    color:#7d7d7d;
    font-size: 14px;
  }
`;