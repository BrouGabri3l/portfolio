import styled from "styled-components"
import { Navigator } from './navigator'
const Nav = styled.div`
    display:none;
    background-color:rgba(0,0,0,0.5);
    position:fixed;
    max-height:300px;
    top:20;
    width:100vw;
    z-index:1;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100vh)'};
    flex-direction:column;
    transition: transform 0.3s ease-in-out;
    @media(max-width:768px){
        display:flex
    }
`
export const SideNav = (props) => {
    return (
        <Nav open={props.open}>
            <Navigator direction={'column'} />
        </Nav>
    )
}