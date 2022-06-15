import React from 'react'
import { useState } from 'react';
import Video from "../../videos/video.mp4"
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight, HeroP} from "./HeroElements";

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
        <HeroH1> Virtual Banking made east</HeroH1>
        <HeroP>
            Sign up for a new account today 
        </HeroP>
        <HeroBtnWrapper>
            <Button to="/dashboard" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
        </HeroBtnWrapper>
    </HeroContent>

    </HeroContainer>
  )
}

export default HeroSection