import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const Left = styled.div`
  flex: 1;
  background-color: #fff9f1;
  z-index: -1;
  width: 100%;
  & img {
    max-width: 85%;
    position: fixed;
    width: 52% !important;
    height: 100vh;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const haeder = styled.header`
  width: 100%;
`;

export const footer = styled.footer`
  width: 100%;
`;

export const Right = styled.div`
  flex: 1;
  height: 100%;
  background-color: #fff9f1;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`;

export const Children = styled.div`
  max-width: 474px !important;
  padding: 70px 0 70px 0;
  background-color: white;
  min-height: calc(100vh - 2px);
  box-sizing: border-box;
  border: 1px solid #ddd;
  overflow: hidden;
  z-index: 9996 !important;

  @media (min-width: 475px) and (max-width: 1024px) {
    width: 474px;
  }
`;
