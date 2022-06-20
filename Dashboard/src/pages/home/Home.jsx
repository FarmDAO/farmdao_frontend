import React from "react"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"
import Widget from "../../components/widget/Widget"
import List from "../../components/table/Table"

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                
                <div className="widgets">
                    <Widget type="user" />
                    
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                    

                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Loans</div>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Home

