import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
    flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 420px;
`;

export const BoxTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
  width: 90%;
  height: 100%;
`;

export const BoxTitle = styled.div`
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const List = styled.div`
  display: flex;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8px;
  cursor: pointer;
`;


export const Img = styled.div`
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  width: 180px;
  height: 280px;
  border-radius: 20px;
  & img {
  width: 180px;
  height: 280px;
  border-radius: 20px;
  }
`;

export const Info = styled.div`
  margin: 15px 0 25px 0;
  width: 100%;
  line-height: 20px;
  & div {
    width: 180px;
    padding: 3px;
    text-align: start;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const SliederBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
font-weight: bold;
`