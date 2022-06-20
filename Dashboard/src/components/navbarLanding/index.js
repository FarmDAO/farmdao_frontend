import React from 'react'
import { FaBars }  from "react-icons/fa"
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from "./NavbarElement.js";

const Navbarlanding = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    FarmDAO
                </NavLogo> 
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">Backers</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover">Borrowers</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">How it works</NavLinks>
                    </NavItem>
                    
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default  Navbarlanding ;
