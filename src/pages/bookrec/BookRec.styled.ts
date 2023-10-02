import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;
export const WrapperBook = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const BoxTitleBox = styled.div`
  margin-bottom: 15px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #f7f7f7;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
  height: 100%;
`;

export const BoxTitle = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
`;
export const BookSet = styled.div``;
export const List = styled.div`
  display: flex;
  width: 180px;
  height: 350px;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const Img = styled.div`
  width: 180px;
  height: 280px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  & img {
    width: 180px;
    height: 280px;
    background-color: #fff9f1;
    border-radius: 5px;
  }
`;

export const Info = styled.div`
  margin: 10px 0 15px 0;
  width: 100%;
  line-height: 18px;
  font-size: 13px;
  & div {
    width: 200px;
    padding: 3px;
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const BookTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

export const SliederBox = styled.div`
  display: flex;
  width: 100%;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
