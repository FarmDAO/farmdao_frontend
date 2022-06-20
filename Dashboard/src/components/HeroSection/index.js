import React from 'react'
import { useState } from 'react';
import Video from "../../videos/video.mp4"
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight, HeroP} from "./HeroElements";
import { NavBtn,NavBtnLink } from '../navbarLanding/NavbarElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer>
    <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
    </HeroBg>
    <HeroContent>
        <HeroH1> FarmDAO: Onchain loans for Agri processors</HeroH1>
        <HeroP>
        FarmDAO protocol allows ICP holders to extend credit to Agri processors in developing markets.

        </HeroP>
        <HeroBtnWrapper>
           
            <NavBtn>
                    <NavBtnLink to="/dashboard">Get started now</NavBtnLink>
                </NavBtn>
        </HeroBtnWrapper>
    </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection