import styled from 'styled-components';

export const StyledSelect = styled.select`
  text-align: center;
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid #a8a8a8;
  border-radius: 15px;
  outline: none;
  transition: border-color 0.3s;
  height: 30px;
  max-width: 90px;

  &:focus {
    border-color: #ddd;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;
