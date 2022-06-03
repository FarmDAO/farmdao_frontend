import "./datatable.scss";
import React, { Component }  from 'react';

import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";




const Datatable = () => {

  const actionColumn = [{field:"action", headerName:"Action" , width : 200, renderCell:()=>{
    return (
      <div className="cellAction">
      {/* replace the test part with a dynamic var from Database */}
      <Link to="/users/test" style={{ textDecoration: "none"}} >
        <div className="viewButton">View</div>
        </Link>
        <div className="deleteButton">Delete</div>
      </div>
    )
  }}
  ]
  return (
    <div className="datatable">
     <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />

    </div>
  )
}

export default Datatable