import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  padding-bottom: 100px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;

`;

export const Title = styled.div`
  font-size: 24px;
  text-align: left;
  color: black;
  font-weight: bold;
  margin-left: 10px;
  
`;

export const JoinLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  color: black;
  margin-top: 10px;
  margin-right: 10px; 

`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

export const Input = styled.input`
  size: 420px;
  height: 57px;
  text-align: center;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  cursor: pointer;

  margin-bottom: 0.8rem;
`;

export const Button = styled.button`
  width: 420px;
  height: 57px;
  text-align: center;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 0.8rem;
  cursor: pointer;
`;

export const Kakao = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Google = styled(Link)`
  text-decoration: none;
  color: black;
`;
