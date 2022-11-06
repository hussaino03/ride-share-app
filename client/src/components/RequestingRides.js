import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {getSuggestedRides} from '../actions/ride'
import { Button } from "@mui/material";
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'

const columns = [
  {
    field: "name",
    headerName: "Name",
    description: "This column has a value getter and is not sortable.",
    
    width: 120,
  },
  {
    field: "age",
    headerName: "Age",
    width: 70,
    editable: true,
  },
  {
    field: "Starting Point",
    headerName: "Starting Point",
    description: "This column gives you start address",
    
    width: 200,
  },
  {
    field: "Ending Point",
    headerName: "Ending Point",
    description: "This column gives you end address",
    
    width: 200,
  },
  {
    field: "Accept",
    headerName: "Accept",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
     // don't select this row after clicking

        
        return alert("Do you surely want to accept it ?");
      };

      return <Button onClick={onClick}>✔️</Button>;
    }
  },
  {
    field: "Reject",
    headerName: "Reject",
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
     // don't select this row after clicking

        
        return alert("Do you surely want to accept it ?");
      };

      return <Button onClick={onClick}>❌</Button>;
    }
  },
];

const rows = [
  { id: 1, name: "Vishesh", age: 14, price: "$4.00" },
  { id: 2, name: "Arnab", age: 21, price: "$3.00" },
];


const RequestingRides = () => {

  const { auth } = useSelector((state) => ({ ...state }));
  const [rides, setRides] = useState([])

  useEffect(() => {
    loadSuggestedRides()
  }, [])

  const loadSuggestedRides = async () => {
    const id = auth.user._id
    const items = JSON.parse(localStorage.getItem("auth"));
    const userId = items.user._id;
    console.log("Suggested Rides -> ", id);
    try {
    let res = await getSuggestedRides(id)

    if (res.data) {
      console.log("LOADDD--->", res.data)
    }

    setRides(res.data)

    } catch (err) {
      console.log(err)
    }

  }
  
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        columnHeaders={{ padding: 20 }}
        sx={{
          fontFamily: "Poppins",
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }}
      />
    </Box>
  );
};

export default RequestingRides;
