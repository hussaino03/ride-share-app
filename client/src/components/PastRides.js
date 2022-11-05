import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    description: "This column has a value getter and is not sortable.",
    
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    width: 120,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price ($)",
    width: 150,
  },
];

const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 ,price:50},
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 1, name: "Vishesh 2", age: 14, price: "$4.00" },
  { id: 2, name: "Arnab 2", age: 21, price: "$3.00" },
];
const PastRides = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        item
        xs
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{
          fontFamily: "Poppins",
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }}
        columnHeaders={{ padding: 20 }}
      />
    </Box>
  );
};

export default PastRides;
