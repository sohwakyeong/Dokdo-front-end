  import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Background =styled.div`
    width: 1440px;
    height: 100vh;
    background-color: #fdf8ef;
`

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

    width:174px;
    height:100vh;
    background-color: white;
`
export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 20px;
    width: 100px;
    height: 50px; 
    background-color: beige; 
`
export const SideNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    
      div {
        padding:10px;
    }
`
export const AdminLink = styled(NavLink)`
    text-decoration: none;
    color:black;
    justify-content: space-between;
    font-size: 19px;
    color:grey;
    align-items: center;

    width: 140px;
    height: 30px;

    &.active {
        padding-left: 15px;
        border-left: 5px solid #a39485;
    }
`

export const Children = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width:766px;
    height: 100vh;
    padding-top: 10px;
    background-color: #e9ecef;
    font-size: 20px;
    overflow: auto;
`

export const Headline = styled.div`
    padding-top: 64px;
    padding-bottom: 25px;
    padding-left: 10px;
    font-size: 32px;
    font-weight: bold;
`
export const Total = styled.div`
    font-size : 18px;
    padding-bottom: 15px;
    padding-left: 10px;
`

export const MenuTop = styled.div`
    display:flex;
    flex-direction: column;
`

export const Select = styled.select`
    display: flex;
    align-self: flex-end;
    width:140px;
    height: 40px;
    border: 0.5px solid #a8a8a8;
    border-radius: 10px;
    margin-bottom: 5px; 
    font-size: 16px;
    text-align: center;
`

export const Table = styled.table`
    width: 580px;
    margin: 10px;
    background-color: white;
    border: 1px #a39485 solid;
    border-radius: 5px;
    border-collapse : collapse;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    font-size: 15px;
    overflow: hidden;
    
    thead {
        height: 40px;
        color:black;
        background-color: white;
        border-bottom: 1px grey solid;
        font-weight: bold;
        font-size: 15px;
        text-align: center;
    }

    td,tr {
        padding:10px;
        border: none;
        text-align:center; 
    }
`

export const LogoutButton = styled.button`
    width: 125px;
    height: 40px;
    padding: 5px;
    margin-bottom: 20px;
    background-color: beige; 
    border: 0.5px solid #f5ddce;
    border-radius: 30px;
    font-size: 18px;
    text-align: center;
    color: #84614b;
`

export const AdminButton = styled.button`
    width: 42px;
    height: 24px;
    border: 0.5px solid #A8A8A8;
    border-radius: 30px;
    background-color: white;
    font-size: 11px;
    color: #414141;
    `

export const ReplyButton = styled.button`
    width: 67px;
    height: 24px;
    border: 1px solid #2c54e4;
    border-radius: 30px;
    background-color: white;
    font-size: 11px;
    color: #2c54e4;
`

export const CheckButton = styled.button`
    width: 67px;
    height: 24px;
    border: 1px solid #2c54e4;
    border-radius: 30px;
    background-color: #2c54e4;
    color: white;
    font-size: 11px;
    `
export const StlyedImg = styled.img`
width: 20px;
height: 20px;
margin-right: 5px;
`;


