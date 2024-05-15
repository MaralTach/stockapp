import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useStockRequest from "../services/useStockRequest";
import { useSelector } from "react-redux";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function ProductTable() {
  const { deleteStock } = useStockRequest();
  const {products} = useSelector((state) => state.stock);

const getRowId = (row) => row._id

  const columns = [
    { field: "_id", headerName: "#", width: 100, flex: 1, },
    {
      field: "categories",
      headerName: "Categories",
      width: 150,
      editable: true,
      valueGetter: (value, row) => row.categoryId?.name,
    },
    {
      field: "brandId",
      headerName: "Brands",
      width: 150,
      editable: true,
      valueGetter: (value, row) => row.brandId?.name,
    },
    {
      field: "name",
      headerName: "Name",
      type: "number",
      width: 110,
      editable: true,
    },

    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      width: 110,
      editable: true,
      valueGetter: (value, row) => row.quantity,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Operations",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => deleteStock("products", props.id)}
          label="Delete"
          color="error"
        />,
      ],
    },
  ];
  return (
    <Box sx={{ height: 400, width: "100%", maxWidth: 1200,  
    borderRadius: "10px", boxShadow: "0px 0px 10px black", 
      }}>
      <DataGrid 
      rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
