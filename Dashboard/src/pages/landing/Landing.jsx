import "./landing.scss"
import {Link} from "react-router-dom";
import React, { Component }  from 'react';


const Landing = () => {
    return (
        <div className="landing">
            This is our landing plage

            <Link to="/dashboard" style={{textDecoration:"none"}}>
                        <span>Dashboard</span>
            </Link>
        </div>
    )
}

export default Landing;