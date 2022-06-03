import "./table.scss"
import React, { Component }  from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {

    const rows = [
        {
            id:1143155,
            product: "Acer Nitro 5",
            img: "",
            customer : "John Smith",
            date :"1 March",
            amount: 785,
            status : "Approved"
        },
        {
            id:1143155,
            product: "Acer Nitro 5",
            img: "",
            customer : "John Smith",
            date :"1 March",
            amount: 785,
            status : "Refused"
        },
        {
            id:1143155,
            product: "Acer Nitro 5",
            img: "",
            customer : "John Smith",
            date :"1 March",
            amount: 785,
            status : "Pending"
        },
    ]
    return <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Traking ID</TableCell>
          <TableCell className="tableCell">Product</TableCell>
          <TableCell className="tableCell">Customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            
          >
            <TableCell >
              {row.id}
            </TableCell>
            <TableCell className="tableCell">{row.product}</TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">
                <span className={`status ${row.status}`} >{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
}

export default List; 