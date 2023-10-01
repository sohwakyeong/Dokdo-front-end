import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 230px;
  background-color: white;
  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(1);
  }
`;

export const Border = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: solid 1px #ddd;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  width: 45%;
  overflow: hidden;
`;

export const TextImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & div {
    font-size: 15px;
  }
`;

export const ImgBox = styled.div`
  width: 210px;
  height: 75%;
  background-color: white;
  object-fit: cover;
  margin-bottom: 7px;
  box-sizing: border-box;
  overflow: hidden;
  object-fit: cover;

  & img {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  height: 50%;
  text-overflow: ellipsis;
  overflow: hidden;

  & div {
    width: 100%;
  }
`;

export const GroupName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3px;
  overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;

export const GroupIntro = styled.div`
  width: 95%;
  max-height: 70px; /* 최대 높이를 설정합니다. */
  color: #707070;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
