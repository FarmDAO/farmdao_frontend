import "./table.scss"
import React, { Component }  from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetch2 from "../../hooks/useFetch2";


const List = () => {

  const {data, loading, error} = useFetch2("https://api.mocki.io/v2/046cd182/FarmDaoData");

  if (loading) return <h1>Loading...</h1>;

  if  (error) console.log(error);

    const rows = [
        {
            id:1,
            product: "Elsa Zilberstein",
            img: "",
            customer : "100000 $",
            date :"5 %",
            amount: 1,
            status : "posted"
        },
        {
            id:2,
            product: "John Ferris",
            img: "",
            customer : "300000 $",
            date :"7.5 %",
            amount: 1,
            status : "approved"
        },
        {
            id:3,
            product: "Michael Brown",
            img: "",
            customer : "1200000 $",
            date :"6.5 %",
            amount: 2,
            status : "funding"
        },
    ]
    return <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">Traking ID</TableCell>
          <TableCell className="tableCell">Borrower</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Interest Rate</TableCell>
          <TableCell className="tableCell">Tenor</TableCell>
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