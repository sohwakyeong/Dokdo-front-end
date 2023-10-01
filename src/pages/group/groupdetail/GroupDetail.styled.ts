import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const GroupHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  margin-bottom: 50px;
  &:hover {
    font-weight: bold;
  }
`;
export const ModalDisplay = styled.div`
  display: flex;
  justify-content: right;
  width: 90%;
`;
export const GroupName = styled.div`
  width: 90%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
`;

// 이미지 유압프레스로 들어가게 해야 함
export const GroupImage = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  text-align: center;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const EditButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin-bottom: 10px;
  padding: 10px;
  width: 95%;
  text-align: right;

  & div {
    background-color: transparent;
  }
`;

export const HashTagDisplay = styled.div`
  display: flex;
  justify-content: center;
`;

export const HashTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  width: 380px;
  & div {
    padding: 8px;
    background-color: #fff7ec;
    border-radius: 20px;
    width: 80px;
    color: #84614b;
    margin-left: 15px;
    font-size: 14px;
  }
`;
export const GroupInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  height: 400px;

  box-sizing: border-box;
  border-bottom: solid 1px #ddd;
  width: 100%;
`;

export const GroupInfoBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  border-top: 1px solid #eeeeee;
  margin: 5px;

  & div {
    padding: 20px;
  }
`;

export const GroupInfoTitle = styled.div`
  width: 95%;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  text-align: center;
`;

export const GroupInfoTP = styled.div`
  display: flex;
  padding: 5px;

  & div {
    padding: 10px 0 0 20px;
    color: #7e7e7e;
    font-weight: 500;
  }
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const ScheduleTitle = styled.div`
  text-align: left;
  font-size: 20px;
`;

export const ScheduleTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;

  & button {
    border: none;
    background-color: white;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 20px;
    height: 35px;
    width: 90px;
    font-size: 14px;
  }
`;
export const ScheduleBox = styled.div`
  box-sizing: border-box;

  border: solid 1px #ddd;
  width: 95%;
  height: 100%;
  padding: 20px;
  border-radius: 10px;
  margin: 15px 0;

  & div {
    line-height: 20px;
    padding: 3px;
  }
`;

export const SDTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
`;
export const SDDate = styled.div`
  margin-top: 10px;
  font-size: 15px;
  padding: 2px;
  & > span {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
`;
export const SDPlace = styled.div`
  font-size: 15px;
  padding: 2px;
  & > span {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
`;
export const SDDues = styled.div`
  font-size: 15px;
  padding: 2px;
  & > span {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
`;

export const NotScheduleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 405px;
  height: 230px;
  margin: 15px 0;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

export const MemberBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 0;
  padding: 20px;

  width: 100%;
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
`;

export const ButtonDisplay = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1000;

  top: 50%;
  left: 20%;
  transform: translateY(-50%);

  width: 409px;
  height: 381px;
  background-color: #ffffff;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 24px;
`;

export const ModalContent = styled.div`
  flex: 1;
  padding: 15px;
  overflow: auto;
  & > form > div {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 10px;
  }

  & > form > div > label {
    width: 100px;
    margin-left: 10px;
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
  }

  & > form > div > input {
    flex: 1;
    width: 300px;
    height: 31.6px;
    border-radius: 10px;
    border: 0px solid #ccc;
    background-color: #efefef;
    margin-left: -15px;
    margin-right: 20px;
    padding-left: 15px;
  }

  & > form > .button-container > button {
    margin-top: 10px;
    width: 76px;
    height: 35px;
    background-color: #84614b;
    color: white;
    border: none;
    border-radius: 15px;
    cursor: pointer;
  }

  & > form > .button-container > button:hover {
    background-color: #ffffff;
    border: 1px solid #84614b;
    color: #84614b;
  }
  & > form > .button-container {
    display: flex;
    justify-content: center;
    gap: 10px; // 버튼들 사이의 간격
  }
`;

export const NFWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  font-size: 13px;
  width: 470px;
  border-top: 0.5px solid #d7d7d7;
  margin-bottom: 58px;
  z-index: 9999;
`;

export const NFDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const NFNextBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  background-color: #84614b;
  height: 45px;
  border-radius: 20px;

  & button {
    border: none;
    color: white;
    background-color: transparent;
    font-size: 19px;
    font-weight: 700;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export const DropdownButton = styled.button`
  display: flex;
  justify-content: right;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 25px;
  right: 0;
  width: 90%;
`;

export const DropdownContent = styled.div`
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #000;
  border-radius: 15px;
  width: 150px;
  height: 100px;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

export const DeleteSection = styled.div`
  display: flex;
  align-items: center;
`;

export const EditGroupSection = styled.div`
  display: flex;
  align-items: center;
`;

// 스타일링된 파일 선택 버튼
export const StyledFileInput = styled.input`
  display: none;
`;

export const CustomFileInput = styled.label`
  font-size: 15px;

  &:hover {
    font-weight: 700;
    color: #84614b;
  }
`;

// 파일 선택 버튼의 라벨 디자인
export const CustomFileInputLabel = styled.div`
  font-size: 15px;

  &:hover {
    font-weight: 700;
    color: #84614b;
  }
`;
export const EditGroupInfo = styled.div`
  font-size: 15px;

  &:hover {
    font-weight: 700;
    color: #84614b;
  }
`;

export const GroupLikeDisplay = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 9%;
  height: 100%;
`;
