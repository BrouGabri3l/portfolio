import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { Navigator } from './navigator'
import { NavContainer } from '../styled/styledHeader'
import { Hamburguer } from './hamburguer'
import { SideNav } from './sidenav'
import { useState } from 'react'
const IconProvider = ({ className, children }) => <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
const StyleProvider = styled(IconProvider)`
    margin: 0 20px;
    color:#fff;
    width:2em;
    height:2em;
    &:hover{
        color:#3EAED6;
    }
`
const NavBar = ({ className }) => {
    const [Open, SetOpen] = useState(false);
    return (
        <div className={className}>
            <StyleProvider>
                <NavContainer >
                    <p>image</p>
                </NavContainer>
                <Navigator />
                <NavContainer onClick={() => SetOpen(!Open)}>
                    <Hamburguer />
                </NavContainer>
                <SideNav open={Open} />
            </StyleProvider>
        </div >
    )

}


export const Header = styled(NavBar)`
    position:sticky;
    z-index:2;
    top:0;
    background-color: rgba(0, 0, 0);
    height:60px;
    display:flex;
    justify-content:space-between;
    flex-wrap:nowrap;
    ${NavContainer}:nth-child(4){
             display:none;
         }
    @media(max-width:768px){
        ${NavContainer}:nth-child(2),${NavContainer}:nth-child(3) {
            display:none;
         }
         ${NavContainer}:nth-child(4){
             display:block;
         }
    }
`