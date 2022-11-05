import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

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
    field: "price",
    headerName: "Price ($)",
    width: 120,
  },
  {
    field: "Starting Point",
    headerName: "Starting Point",
    description: "This column gives you start address",
    
    width: 250,
  },
  {
    field: "Ending Point",
    headerName: "Ending Point",
    description: "This column gives you end address",
    
    width: 250,
  },
];

const rows = [
  { id: 1, name: "Vishesh", age: 14, price: "$4.00" },
  { id: 2, name: "Arnab", age: 21, price: "$3.00" },
];

const UpcomingRides = () => {
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

export default UpcomingRides;
