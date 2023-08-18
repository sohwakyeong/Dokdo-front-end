import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  
  box-sizing: border-box;
  width: 474px;
  margin: 60px auto;
`;

export const TitleWrap = styled.div`
  width: 420px;
  text-align: left;
`;
export const Title = styled.div`
    display:flex;
    
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 12px;
`;

export const Description = styled.p`
    font-size: 16px;

`;

export const Wrapper = styled.form`
  width: 420px;
  margin: 51px 27px 16px 27px;
  justify-content: center;

`;
export const FormTag = styled.div`
display: flex;
margin-top: 15px;
margin-bottom: 3px;
`;
export const Tag = styled.div`
    display: flex;
    justify-items: left;

`;
export const TagPlus =  styled.div`
display: flex;
    color: red;

`;
export const FormInput = styled.div`
    display: flex;
    position:relative;

`;

export const Input = styled.input`
  display: flex;
  width: 420px;
  height: 37px;
  border-radius: 8px;

`;

export const Egoll = styled.div`
    margin: 0 5px;
    font-size: 1.3rem;   
`;

export const EmailInput = styled(Input)`
  width: 130px;
`;

export const EmailSelect = styled.select`
    width: 130px;
`;


export const InputButton = styled.input`
  display: flex;
  text-align: center;

`;

export const DupleButton = styled(InputButton)`
 width: 130px;
 height: 42px;
 margin-left: 10px;
`;

export const GenderButton = styled(InputButton)`  
    width: 200px;
    height: 42px;

 &+& {
    margin-left: 20px;
 } 
`;