import "./datatable.scss";
import React, { Component }  from 'react';

import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";

// importation of wallet

// import { AuthClient } from "@dfinity/auth-client";
// import { onMount } from "svelte";
// import { auth, createActor } from "../store/auth";
// import BalanceInfo from '../components/BalanceInfo.svelte';

// end of importation




const Datatable = () => {

  //actual code of wallet
// /** @type {AuthClient} */
// let client;
// onMount(async () => {
//   client = await AuthClient.create();
//   if (await client.isAuthenticated()) {
//     handleAuth();
//   }
// });
// function handleAuth() {
//   auth.update(() => ({
//     loggedIn: true,
//     actor: createActor({
//       agentOptions: {
//         identity: client.getIdentity(),
//       },
//     }),
//   }));
// }
// function login() {
//   client.login({
//     identityProvider:
//       process.env.DFX_NETWORK === "ic"
//         ? "https://identity.ic0.app/#authorize"
//         : `http://${process.env.INTERNET_IDENTITY_CANISTER_ID}.localhost:8000/#authorize`,
//     onSuccess: handleAuth,
//   });
// }
// async function logout() {
//   await client.logout();
//   auth.update(() => ({
//     loggedIn: false,
//     actor: createActor(),
//   }));
// }
  // end of wallet code

  
    const {data,loading,error}=useFetch("https://api.mocki.io/v2/046cd182")
    
    console.log(data.id)


  

  
  

  const actionColumn = [{field:"action", headerName:"Action" , width : 200, renderCell:(params)=>{
    return (
      <div className="cellAction">
      {/* replace the test part with a dynamic var from Database */}
      {/* <Link to={"/users/" + data.id} style={{ textDecoration: "none"}} > */}
      <Link to={"/users/" + params.row.id} >
        <div className="viewButton">View</div>
        </Link>
        
      </div>
    )
  }}
  ]
  return (
    <div className="datatable">
     <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        
      />
      
      

      {/* html part of wallet  */}

      {/* <div class="container">
        if ($auth.loggedIn) { 
        <div class="auth-btn-container">
          <button onClick={logout}>Log out</button>
    </div>

    <div>
      <BalanceInfo />
    </div>
    
        } else { 
    <button onClick={login}>Authenticate in with Internet Identity</button>
  }
</div> */}

      {/* end of html part */}
      

    </div>
    
  )
  
}

export default Datatable