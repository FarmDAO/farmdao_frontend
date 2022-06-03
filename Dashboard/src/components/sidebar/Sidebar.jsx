import "./sidebar.scss"
import React, { Component }  from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
            
                <span className="logo">lamadmin</span>
                
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <Link to="/" style={{textDecoration:"none"}}>
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
                    <li>
                        <ProductionQuantityLimitsIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <span>Orders</span>
                    </li>
                    <li>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <span>Settings</span>
                    </li>
                    <li>
                        <span>Profile</span>
                    </li>
                    <li>
                        <span>Log out</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
             </div>
        </div>
    )
}

export default Sidebar