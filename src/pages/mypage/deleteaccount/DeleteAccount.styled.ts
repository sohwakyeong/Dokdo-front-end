import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  box-sizing: border-box;
  width: 474px;
  margin: 80px auto 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 50px auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;
export const TitleWrap = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 27px;
`;
export const Title = styled.div`
  display: flex;

  font-size: 25px;
  font-weight: bold;
  margin-bottom: 13px;
`;

export const Description = styled.p`
  font-size: 15px;
  margin-bottom: 3px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
`;

export const BtnSelect = styled.div`
  cursor: pointer;
  width: 420px;
  height: 50px;
  border-radius: 15px;
  background-color: #ededed;
  display: flex;
  align-items: center;

  & p {
    padding-left: 15px;
  }
`;
export const ListMem = styled.ul`
  width: 100%;
  margin-left: 30px;

  list-style: none;
  padding: 0;
  margin: 0;
`;
export const ListItem = styled.li`
  list-style: none;
  height: 50px;
  text-align-last: left;
  width: 100%;
`;

export const Button = styled.button`
  padding: 5px 15px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  border: none;
  border-radius: 15px;
  &:hover {
    background-color: #ccc;
  }
`;

export const Input = styled.input`
  height: 50px;
  margin-top: 10px;
  border-radius: 15px;
  border: none;
  font-size: 16px;
  background-color: #ededed;
  padding-left: 15px;
  &::placeholder {
    color: #727272;
  }
`;

export const LastDescription = styled.p`
  font-size: 15px;
  margin: 0 auto 5px auto;
`;

export const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  height: 67px;
  margin-top: 20px;
  justify-content: center;
`;
export const BackButton = styled.button`
  width: 45%;
  border-radius: 8px;
  font-size: 17px;
  font-weight: bold;
  background-color: white;
  border: 1px solid #595959;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: #595959;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  width: 45%;
  border-radius: 8px;
  font-size: 17px;
  font-weight: bold;
  background-color: #84614b;
  border: none;
  margin-left: 10px;
  color: #ffffff;
  cursor: pointer;
`;

export const RemoveLink = styled(Link)`
  text-decoration: none;
`;

export const CheckModalSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: #84614b;
  cursor: pointer;
  width: 90%;
  margin: 30px auto 10px auto;
`;

export const ModalSubmit = styled(CheckModalSubmit)``;
