import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 940px;
    min-height: 100%;
    margin: 0 auto;
    background-color: beige;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    max-width: 940px;  
    padding : 20px;
`

export const Container = styled.div` 
    position: relative;
    margin: 0 auto;   
    margin-bottom: 20px;
    box-sizing: border-box;
`

export const Title = styled.div`
    font-size: 40px; 
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    max-width: 900px;
`
export const Input = styled.input`
    width: 700px;
    height:50px;
    padding: 0 30px;
    border-radius: 5px;
    border: none;

    &::placeholder{
        color: gray;
        font-size: 15px;
        text-align:center;
    }
`
export const Name = styled.div`
    padding: 10px 0 ;
`

export const Detail = styled.input`
    width: 700px;
    height:200px;
    padding: 0 30px;
    border: none;
    border-radius: 5px;

    &::placeholder{
        color: gray;
        font-size: 15px;
        text-align:center;
    }
`

export const Button = styled.button`
    width: 100px;
    height: 40px;
    margin: 25px 0;
    background-color: burlywood;
    border: none;
    border-radius: 10px;
`
