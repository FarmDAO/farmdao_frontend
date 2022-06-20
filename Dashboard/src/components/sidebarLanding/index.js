import React from 'react'
import { SidebarContainer,Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './sidebarElement';

const SideBarlanding = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
        <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    Backers
                </SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>
                    Borrowers
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    How it works
                </SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>
                    Sign up
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/dashboard">Start Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBarlanding ;