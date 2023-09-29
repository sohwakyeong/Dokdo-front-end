import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  width: 100%;
  height: 100%;
`;
export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px rgba(128, 128, 128, 0.3) solid;
  height: 100px;

`;
export const MainInfo = styled.div`
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px rgba(128, 128, 128, 0.3) solid;
`;
export const DescriptionInfo = styled.div`
  height: 130px;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px rgba(128, 128, 128, 0.3) solid;
`;

export const TitleInfo = styled.div`
  padding-bottom: 10px;
  width: 470px;
 
`;

export const TitleBox = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const CategoryBox = styled.div`
  font-size: 13px;
  padding: 10px;
`;
export const ImageBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  img {
    width: 170px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    object-fit: cover;
  }
`;
export const TableBox = styled.div`
  height: 250px;
  width: 50%;
  display: flex;
  justify-content: center;
`;
export const Table = styled.div`
  height: 250px;
  tbody {
    height: 250px;
  }
  th {
    padding: 12px 3px;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.1em;
    text-align: left;
    color: #000;
    font-weight: 500;
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
  }

  td {
    padding: 12px 3px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.1em;
    text-align: left;
    color: #000;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
     max-width:150px;
  }
`;
export const Description = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
`;
export const DescriptionDetail = styled.div`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #000;
`;
export const ButtonBox = styled.div`
    padding: 5px;
    height:100px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ButtonLink = styled(Link)`
    color:white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #84614b;
    border-radius: 20px;
    font-size: 19px;
    font-weight: 700;
    width: 100%;
    height: 40px;
    cursor: pointer;
    text-decoration: none;
`