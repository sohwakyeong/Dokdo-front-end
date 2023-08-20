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
  margin: 160px auto;
`;

export const TitleWrap = styled.div`
  width: 420px;
  text-align: left;
`;
export const Title = styled.div`
  display: flex;

  font-size: 25px;
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-size: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 420px;
`;

export const ReasonSelect = styled.select`


`;

export const Input = styled.input`

`;

export const PressButton = styled.button`
  width: 40%;
  border-radius: 8px;
`;

export const BackLink = styled(Link)`
    text-decoration: none;
    color: black;
    background-color: white;
`;

export const RemoveLink = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: black;

`;

export const LastDescription = styled.p`
  font-size: 16px;
`;