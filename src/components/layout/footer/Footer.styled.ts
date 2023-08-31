import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  height: 60px;
  font-size: 10px;
  background-color: white;
  width: 472px;
  z-index: 9998;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-family: Pretendard;
  font-weight: 500;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  list-style: none;
  padding: 5px 0;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 13px;
  margin: 8px;

  img {
    width: 24px;
    height: 24px;
    margin-bottom: 4px;
  }
`;
