import React, { Component }  from 'react';

import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import useFetch from '../../hooks/useFetch';
import useFetch2 from '../../hooks/useFetch2';
import ProgressBar from '../../components/progressBar/ProgressBar';
import { NavBtnSingle,NavBtnLinkSingle } from '../../components/navbarLanding/NavbarElement';

const Single = () => {

  // const {data,loading,error} = useFetch("https://api.mocki.io/v2/046cd182")
  // console.log(data[0].username)
  
  // if (loading) return <h1>Loading...</h1>
  // if(error) console.log(error);


  const {data, loading, error} = useFetch2("https://api.mocki.io/v2/046cd182/FarmDaoData");

  if (loading) return <h1>Loading...</h1>;

  if  (error) console.log(error);

  if(data) console.log(data);
  

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data?.response[0].username} </h1>
                <div className="detailItem">
                  <span className="itemKey">Website:</span>
                  <span className="itemValue">{data?.response[0].website}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Due Diligence Folder:</span>
                  <span className="itemValue">{data?.response[0].DueDiligence}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Loan Amount:</span>
                  <span className="itemValue">
                  {data?.response[0].funded_amount}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Interest rate:</span>
                  <span className="itemValue">{data?.response[0].InterestRate}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Tenor:</span>
                  <span className="itemValue">{data?.response[0].Tenor}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Funded Amount :</span>
                  <span className="itemValue">{data?.response[0].funded_amount}</span>
                </div>
                
                <button className="button-71">Fund now</button>
              </div>
              
            </div>
            
          </div>
           
        </div>

        
       
        {/* test */}
        <div className="charts"></div>
        {/* <Featured /> */}
        

        {/* test */}
      </div>
    </div>
  );
};

export default Single;
