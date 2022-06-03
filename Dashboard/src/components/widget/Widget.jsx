import "./widget.scss"
import React, { Component }  from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { red } from "@mui/material/colors";

const Widget = ({ type }) => {

    let data;
 
    // temporary 

    const amount = 100; 
    const diff= 20;

switch(type){
    case "user":
        data={
            title:"USERS",
            isMoney: false,
            link: "See all users",
            icon: <PersonIcon className="icon" style={{color : "crimson", backgroundColor: "rgba(217, 39, 39, 0.39)" }}/>,
            
        };
        break;
        case "order":
        data={
            title:"ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: <ShoppingCartIcon className="icon" style={{color : "goldenrod", backgroundColor: "rgba(242, 255, 0, 0.37)"}} />,
            
        };
        break;
        case "earning":
        data={
            title:"EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: <MonetizationOnIcon className="icon" style={{color : "green", backgroundColor: "rgba(8, 244, 0, 0.29)"}}/>,
            
        };
        break;
        case "balance":
        data={
            title:"BALANCE",
            isMoney: true,
            link: "See details",
            icon: <AccountBalanceIcon className="icon" style={{color : "purple", backgroundColor: "rgba(150, 0, 244, 0.36)"}}/>,
            
        };
        break;
        default:
            break;
}




    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>

                </div>
            <div className="right">
                <div className="percentage positive">
                <ArrowUpwardIcon />
                {diff} %

                </div>
                {data.icon}
                </div>
        </div>
    )
}

export default Widget 