import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  width: 50%;
  text-align: center;
  padding: 10px 0;
`;

export const container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 474px;
  background-color: #fff;
`;
export const menu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 274px;
  height: 48px;
  border-radius: 15px;
  border: 1px solid #a8a8a8;
  background-color: #fff;
  margin-top: 15px;
`;

interface MenuItemProps {
  rightBorder?: boolean;
}

export const menuItem = styled.a<MenuItemProps>`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  width: 50%;
  border-radius: 15px;
  text-align: center;
  padding: 10px 0;
`;

export const image = styled.img`
  width: 460px;
  max-width: 356px;
  margin: 20px auto;
`;

export const startButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  outline: none;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

export const socialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  margin-top: 25px;
`;

export const socialIcon = styled.a`
  margin: 0 10px;
`;
export const socialIconImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
export const participantsContainer = styled.div`
  font-size: 16px;
  color: #333;
  margin: 10px;
  margin-bottom: 30px;
`;
