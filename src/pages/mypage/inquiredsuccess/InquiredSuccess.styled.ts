import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 100px auto 0 auto;
`;

export const Title = styled.p`
  display: flex;
  color: black;
  font-weight: bold;
  justify-content: flex-start;
  width: 420px;
  margin: 0 0 0 10px;
  font-size: 30px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 90px auto 40px auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;


export const CheckImg = styled.img`
  width: 130px;
  height: 130px;
  margin-bottom: 40px;
`;

export const Description = styled.div`
font-size: 20px;
margin-bottom: 10px;
`;

export const GotoHome = styled.button`
border: none;
border-radius: 8px;
width: 100%;
height: 50px;
margin-top: 30px;
background-color: #84614B;
`;

export const GotoHomeLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 16px;
`;