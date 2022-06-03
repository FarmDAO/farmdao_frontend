
import "./navbar.scss"
import React, { Component }  from 'react';

import SearchOutlinedIcon from "@mui/icons-material/SearchOffOutlined";
import  LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineIcon  from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon  from "@mui/icons-material/ListOutlined";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">

                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon className="icon"/>
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon"/>
                        
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                        
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="counter">1</div>
                        
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineIcon className="icon"/>
                        <div className="counter">2</div>
                        
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon"/>
                        
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/3760260/pexels-photo-3760260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile pic" className="avatar"/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar
