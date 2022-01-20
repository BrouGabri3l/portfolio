import { render } from "@testing-library/react"
import react from "react"
import styled from "styled-components"
// export const Header = styled.nav`
//     width:100vw;
// background-color: #f0f;
//     height: 80px;
// `
export const NavContainer = styled.ul`
    display:flex;
    color:#fff;
    padding:15px;
    flex-basis: 300px;
    flex-grow:1;
    justify-content:center;
    align-items:center;
    flex-direction: ${({ direction }) => direction};
    @media(max-width:768px){
        align-items:flex-start;
    }
`
export const NavItem = styled.a`
    color: #fff;
    text-decoration:none;
    margin:0 20px;
    font-family:'Roboto mono', monospace;
    font-weight:bold;
    font-size: 18px;
    &:hover{
        color:#3EAED6;    
        text-decoration:underline;
    }
    @media(max-width:768px){
        padding:16px;
    }
`


