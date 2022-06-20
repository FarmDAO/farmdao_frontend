import "./sidebar.scss"
import React, { Component }  from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
            
                <span className="logo">FarmDAO</span>
                
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <Link to="/dashboard" style={{textDecoration:"none"}}>
                        <span>Dashboard</span>
                        </Link>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonIcon className="icon"/>
                        <Link to="/users" style={{textDecoration:"none"}}>
                        <span>Loans</span>
                        </Link>
                    </li>
                   
                 
                    <p className="title">SERVICE</p>
                    <li>
                    <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <li>
                    <AccountBoxIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                    <LogoutIcon className="icon" />
                    <Link to="/" style={{textDecoration:"none"}}>
                        <span>Log out</span>
                        </Link>
                    </li>
                </ul>
            </div>
         
        </div>
    )
}

export default Sidebar