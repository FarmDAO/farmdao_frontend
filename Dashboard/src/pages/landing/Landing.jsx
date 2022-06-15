import "./landing.scss"
import {Link} from "react-router-dom";
import React, { Component } from 'react';
import { useState } from "react";
import Navbarlanding from "../../components/navbarLanding/index.js";
import SideBarlanding from "../../components/sidebarLanding";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";


const Landing = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen);
};

    return (

    <>
        <SideBarlanding isOpen={isOpen} toggle={toggle} />
        <Navbarlanding toggle={toggle} />
        <HeroSection />
        <InfoSection />
    </>
    )
}

export default Landing;