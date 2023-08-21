import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    max-width: 940px;
    height: 100%;
    margin: 0 auto;
    
`
export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;

    width:160px;
    height:100vh;
    background-color: beige;
`

export const Main = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    width:780px;
    height:100vh;
`

export const Input = styled.input`
    position: static;
    width: 700px;
    height:50px;
    border-radius: 50px;
    margin-top: 40px;

    &::placeholder{
        color: gray;
        font-size: 15px;
        text-align:center;
    }
`

export const Todo = styled.div`
    display: flex;
    align-self: flex-start;
    margin-top:40px;
    margin-left: 40px;
    font-size:25px;
    font-weight: bold;
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 700px;
    margin-top:20px;
    padding-bottom: 20px;

    & div {
        font-size: 20px;
    }
`
export const Children = styled.div`
    width:700px;
    padding-top: 10px;
    background-color: white;
    font-size: 20px;
    overflow: auto;
`
export const MenuTop = styled.div`
    display:flex;
    flex-direction: column;
`

export const Headline = styled.div`
    padding: 20px 0;
    font-size: 30px;
`

export const Toggle = styled.button`
    display: flex;
    align-self: flex-end;
    width:70px;
    height: 20px;
`

export const Table = styled.table`
    width: 700px;
    background-color: white;
    border: 1px #a39485 solid;
    border-radius: 5px;
    border-collapse : collapse;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    font-size: 15px;
    overflow: hidden;
    
    thead {
        height: 40px;
        padding: 10px;
        color:white;
        background-color:#a39485;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
    }

    td,tr {
        padding:5px;
        border: 1px solid #a39485;
        text-align:center; 
    }
`

export const Link = styled.a`
   text-decoration: none;
    color:black;
   justify-content: space-between;
    align-items: center;
   ;
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    & div {
        width: 70px;
        height: 70px; 
        margin: 10px 0;
        background-color: burlywood; 
       }
`
export const SideNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
      div {
        padding:30px;
    }
`

export const Button = styled.div`
    width: 100px;
    height: 35px;
    margin-bottom: 20px;
    background-color: burlywood; 
    border: none;
    border-radius: 5px;
`


